export const leads=[{id:1,name:'Maya',source:'social',status:'new',interest_level:'medium',deal_value:500,notes:'Asked about starter package'},{id:2,name:'Devon',source:'referral',status:'contacted',interest_level:'high',deal_value:1200},{id:3,name:'Rae',source:'outreach',status:'follow_up',interest_level:'high',deal_value:2000},{id:4,name:'Sol',source:'website',status:'won',interest_level:'high',deal_value:3500},{id:5,name:'Nia',source:'manual',status:'lost',interest_level:'low',deal_value:300}];
export const customers=[{id:1,name:'Sol',notes:'Converted from blueprint lead',lifetime_value:3500}];
export const deals=[{id:1,title:'Coaching package',stage:'proposal',value:1200}];
export const followUps=[{id:1,lead_id:3,channel:'dm',message:'Quick check-in on your launch timeline',status:'draft',due_at:new Date().toISOString()}];
export const pipelineSummary={total_leads:5,new:1,contacted:1,follow_up:1,won:1,lost:1,estimated_pipeline_value:7500};
export const followUpMessage={status:'mock',message:'Hey Maya! Following up to see if you still want help turning your idea into a paid offer.',subject:'Quick check-in',channel:'dm',next_step:'Send one value tip tomorrow.'};
export const leadScore={score:78,interest_level:'high',recommended_next_action:'Invite to a 15-minute fit call.',suggested_follow_up_channel:'dm',suggested_message_angle:'Focus on speed + clarity.'};
