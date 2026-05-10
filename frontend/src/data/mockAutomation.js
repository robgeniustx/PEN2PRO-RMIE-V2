export const mockAutomation = {
  commands:[{id:1,agent_name:'report',command_type:'report',command_text:'create report',status:'queued'},{id:2,agent_name:'social',command_type:'draft',command_text:'draft post',status:'completed',result_payload:'{"summary":"Draft created"}'},{id:3,agent_name:'crm',command_type:'plan',command_text:'send email',status:'awaiting_approval'}],
  approvals:[{id:1,action_type:'send_message',action_summary:'Send welcome email',approval_status:'pending'},{id:2,action_type:'publish_post',action_summary:'Publish campaign post',approval_status:'rejected'}],
  tasks:[{id:1,title:'Finalize offer page',status:'completed',priority:'medium'},{id:2,title:'Call hot lead',status:'todo',priority:'urgent'}],
  activity:[{id:1,action_type:'agent_command_run',description:'Ran command 2',created_at:new Date().toISOString()}],
  dailyReport:{id:1,report_date:'2026-05-03',summary:'Completed 1 task; pending 1 task.',completed_tasks:'["Finalize offer page"]',pending_tasks:'["Call hot lead"]',recommended_next_actions:'["Review pending approvals"]',risks_or_blockers:'["Awaiting approval"]',metrics_snapshot:'{"completed":1,"pending":1}'},
};
