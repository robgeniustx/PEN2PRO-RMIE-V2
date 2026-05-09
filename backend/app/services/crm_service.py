import os
from datetime import datetime, timezone

class CRMService:
    def __init__(self):
        self.leads=[]; self.customers=[]; self.deals=[]; self.follow_ups=[]
        self._id={'lead':1,'customer':1,'deal':1,'follow':1}

    def _create(self, store,key,data):
        item={**data,'id':self._id[key],'created_at':datetime.now(timezone.utc),'updated_at':datetime.now(timezone.utc),'user_id':None}
        self._id[key]+=1; store.append(item); return item
    def create_lead(self,data): return self._create(self.leads,'lead',data)
    def list_leads(self,status=None,source=None): return [l for l in self.leads if (not status or l.get('status')==status) and (not source or l.get('source')==source)]
    def get_lead(self,lead_id): return next((l for l in self.leads if l['id']==lead_id),None)
    def update_lead(self,lead_id,data): l=self.get_lead(lead_id); l.update(data); l['updated_at']=datetime.now(timezone.utc) if l else None; return l
    def delete_lead(self,lead_id): self.leads=[l for l in self.leads if l['id']!=lead_id]; return True
    def create_customer(self,data): return self._create(self.customers,'customer',data)
    def list_customers(self): return self.customers
    def get_customer(self,cid): return next((c for c in self.customers if c['id']==cid),None)
    def update_customer(self,cid,data): c=self.get_customer(cid); c.update(data); c['updated_at']=datetime.now(timezone.utc) if c else None; return c
    def create_deal(self,data): return self._create(self.deals,'deal',data)
    def list_deals(self,stage=None): return [d for d in self.deals if not stage or d.get('stage')==stage]
    def update_deal(self,did,data): d=next((x for x in self.deals if x['id']==did),None); d.update(data); return d
    def create_follow_up(self,data): return self._create(self.follow_ups,'follow',data)
    def list_follow_ups(self,status=None): return [f for f in self.follow_ups if not status or f.get('status')==status]
    def get_due_follow_ups(self): now=datetime.now(timezone.utc); return [f for f in self.follow_ups if f.get('due_at') and f['due_at']<=now and f.get('status')!='completed']
    def complete_follow_up(self,fid):
        f=next((x for x in self.follow_ups if x['id']==fid),None)
        if f: f['status']='completed'; f['completed_at']=datetime.now(timezone.utc); f['updated_at']=datetime.now(timezone.utc)
        return f
    def generate_follow_up_message(self,request_data):
        if not os.getenv('OPENAI_API_KEY'):
            return {'status':'mock','message':f"Hi {request_data['lead_name']}, checking in about {request_data['offer']}. Want me to send details?",'subject':'Quick follow-up','channel':request_data['channel'],'next_step':'Wait 24-48 hours then send a value add touchpoint.','warnings':['OPENAI_API_KEY missing; returning mock content.']}
        return {'status':'ok','message':f"Hi {request_data['lead_name']}, based on your needs, {request_data['offer']} can help. Would a quick chat tomorrow work?",'subject':'Helping with your next step','channel':request_data['channel'],'next_step':'Log response and update lead status.'}
    def score_lead(self,request_data):
        return {'score':78,'interest_level':'high','recommended_next_action':'Schedule a short discovery call.','suggested_follow_up_channel':request_data.get('channel','email'),'suggested_message_angle':'Focus on problem clarity and quick win.'}
    def get_pipeline_summary(self):
        summary={'total_leads':len(self.leads),'new':0,'contacted':0,'follow_up':0,'won':0,'lost':0,'estimated_pipeline_value':0}
        for l in self.leads:
            s=l.get('status','new');
            if s in summary: summary[s]+=1
            summary['estimated_pipeline_value']+=(l.get('deal_value') or 0)
        return summary

crm_service = CRMService()
