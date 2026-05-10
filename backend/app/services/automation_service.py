from datetime import date, datetime
import json
from sqlalchemy.orm import Session
from app.models.agent_command import AgentCommand
from app.models.agent_approval import AgentApproval
from app.models.agent_run import AgentRun
from app.models.task import Task
from app.models.activity_log import ActivityLog
from app.models.daily_report import DailyReport
from app.permissions.agent_permissions import can_run_agent, requires_approval, is_blocked_action
from app.services.openai_service import generate_structured_agent_output

class AutomationService:
    def __init__(self, db: Session): self.db = db
    def create_agent_command(self, data): obj = AgentCommand(**data.model_dump(exclude_none=True)); self.db.add(obj); self.db.commit(); self.db.refresh(obj); return obj
    def list_agent_commands(self, status=None): q=self.db.query(AgentCommand); return q.filter(AgentCommand.status==status).all() if status else q.all()
    def get_agent_command(self, cid): return self.db.query(AgentCommand).filter(AgentCommand.id==cid).first()
    def run_agent_command(self, cid):
        c=self.get_agent_command(cid)
        if not c: return None
        tier = c.tier_required or "pro"
        if not can_run_agent(tier, c.agent_name): c.status="failed"; c.error_message="Tier cannot run this agent"; self.db.commit(); return c
        if is_blocked_action(c.command_text.lower()): c.status="failed"; c.error_message="Blocked action"; self.db.commit(); return c
        if requires_approval(c.command_text.lower()):
            c.status="awaiting_approval"; self.db.add(AgentApproval(action_type="other", action_summary=c.command_text, agent_command_id=c.id)); self.db.commit(); return c
        result=generate_structured_agent_output("Automation safety", {"command": c.command_text})
        c.status="completed"; c.result_payload=json.dumps(result)
        self.db.add(AgentRun(agent_name=c.agent_name,status="completed",input_payload=c.command_text,output_payload=c.result_payload))
        self.log_activity("agent_command_run", f"Ran command {c.id}", c.result_payload)
        self.db.commit(); self.db.refresh(c); return c
    def cancel_agent_command(self,cid): c=self.get_agent_command(cid); c.status="cancelled"; self.db.commit(); return c
    def create_approval_request(self,data): obj=AgentApproval(**data.model_dump(exclude_none=True)); self.db.add(obj); self.db.commit(); self.db.refresh(obj); return obj
    def list_approval_requests(self,status=None): q=self.db.query(AgentApproval); return q.filter(AgentApproval.approval_status==status).all() if status else q.all()
    def approve_action(self,aid): a=self.db.query(AgentApproval).filter(AgentApproval.id==aid).first(); a.approval_status="approved"; a.approved_at=datetime.utcnow(); self.db.commit(); return a
    def reject_action(self,aid): a=self.db.query(AgentApproval).filter(AgentApproval.id==aid).first(); a.approval_status="rejected"; a.rejected_at=datetime.utcnow(); self.db.commit(); return a
    def create_task(self,data): t=Task(**data.model_dump(exclude_none=True)); self.db.add(t); self.db.commit(); self.db.refresh(t); return t
    def list_tasks(self,status=None,source=None): q=self.db.query(Task); q=q.filter(Task.status==status) if status else q; q=q.filter(Task.source==source) if source else q; return q.all()
    def update_task(self,tid,data): t=self.db.query(Task).filter(Task.id==tid).first(); [setattr(t,k,v) for k,v in data.model_dump(exclude_none=True).items()]; self.db.commit(); self.db.refresh(t); return t
    def complete_task(self,tid): t=self.db.query(Task).filter(Task.id==tid).first(); t.status="completed"; t.completed_at=datetime.utcnow(); self.db.commit(); return t
    def log_activity(self,action_type,description,metadata=None): l=ActivityLog(action_type=action_type,description=description,metadata=metadata); self.db.add(l); return l
    def list_activity_logs(self): return self.db.query(ActivityLog).order_by(ActivityLog.id.desc()).all()
    def generate_daily_report(self,data=None):
        completed=self.list_tasks(status="completed"); pending=self.list_tasks(status="todo")+self.list_tasks(status="in_progress")
        summary=f"Completed {len(completed)} tasks; pending {len(pending)} tasks."
        r=DailyReport(report_date=date.today(),summary=summary,completed_tasks=json.dumps([t.title for t in completed]),pending_tasks=json.dumps([t.title for t in pending]),recommended_next_actions=json.dumps(["Focus urgent tasks","Review pending approvals"]),risks_or_blockers=json.dumps(["Awaiting approvals"]),metrics_snapshot=json.dumps({"completed":len(completed),"pending":len(pending)}))
        self.db.add(r); self.db.commit(); self.db.refresh(r); return r
    def get_latest_daily_report(self): return self.db.query(DailyReport).order_by(DailyReport.id.desc()).first()
