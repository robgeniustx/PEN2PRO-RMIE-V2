# Rapid Agent Deployment Guide

**Use this template to deploy any of the remaining 5 agents in ~30 minutes.**

---

## Template Steps

### Step 1: Create Service Layer (10 min)

**File**: `backend/app/services/{agent}_strategy_service.py`

Copy from `backend/app/services/seo_strategy_service.py` and replace:
- Class name: `SEOStrategyService` → `{Agent}StrategyService`
- Agent import: `SEOAgent` → `{Agent}Agent`
- agent_type: `"seo"` → `"{agent}"`
- Method name: `run_seo_agent` → `run_{agent}_agent`
- Field name: `seo_strategy` → `{agent}_strategy`
- Field name: `seo_agent_run_id` → `{agent}_agent_run_id`
- Result storage: Update the `$set` dict with actual agent output fields

**Key change - Update result storage**:
```python
# For SEO:
"seo_strategy": {
    "target_keywords": result.get("target_keywords"),
    "content_strategy": result.get("content_strategy"),
    # etc...
}

# For Email - change to:
"email_strategy": {
    "list_building": result.get("list_building"),
    "funnel_architecture": result.get("funnel_architecture"),
    # etc...
}
```

### Step 2: Add API Route (5 min)

**File**: `backend/app/routes/agents.py`

1. Add import at top:
```python
from app.services.{agent}_strategy_service import {Agent}StrategyService
```

2. Copy the `run_seo_agent` endpoint and:
   - Change route: `"/{blueprint_id}/run-seo-agent"` → `"/{blueprint_id}/run-{agent}-agent"`
   - Change function name: `run_seo_agent` → `run_{agent}_agent`
   - Change service: `SEOStrategyService(db)` → `{Agent}StrategyService(db)`
   - Change task call: `service.run_seo_agent` → `service.run_{agent}_agent`
   - Change message: "SEO agent" → "{Agent} agent"
   - Update docstring and detailed description

3. The status endpoint is already generic and handles all agent types!

### Step 3: Add API Client Method (3 min)

**File**: `frontend/src/api/agentApi.js`

Add method:
```javascript
export const run{Agent}Agent = async (blueprintId) => {
  try {
    const response = await agentClient.post(`/${blueprintId}/run-{agent}-agent`);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.detail || 'Failed to run {Agent} agent. Please try again.';
    throw new Error(message);
  }
};
```

### Step 4: Update State Management Hook (5 min)

**File**: `frontend/src/hooks/useAgent.js`

Add method to export:
```javascript
const run{Agent}Agent = async (blueprintId) => {
  try {
    const key = getAgentKey(blueprintId, '{agent}');
    store.setError(key, null);
    store.setAgentRunning(key, true);

    const response = await agentApi.run{Agent}Agent(blueprintId);

    store.setAgentRun(key, {
      status: response.status || 'processing',
      message: response.message,
      estimated_time: response.estimated_time,
      blueprint_id: response.blueprint_id,
      agent_type: '{agent}',
    });

    pollForCompletion(blueprintId, '{agent}');

    return response;
  } catch (error) {
    const key = getAgentKey(blueprintId, '{agent}');
    store.setError(key, error.message);
    store.setAgentRunning(key, false);
    throw error;
  }
};
```

Add to return object:
```javascript
run{Agent}Agent,
```

### Step 5: Update Detail Page UI (7 min)

**File**: `frontend/src/pages/BlueprintDetailPage.jsx`

1. Update imports:
```javascript
const { runBlueprintAgent, runSEOAgent, run{Agent}Agent, isRunning, error, clearError, getAgentKey } = useAgent();
```

2. Add state:
```javascript
const [{agent}AgentRunning, set{Agent}AgentRunning] = useState(isRunning[getAgentKey(id, '{agent}')] || false);
```

3. Update useEffect:
```javascript
useEffect(() => {
  setAgentRunning(isRunning[getAgentKey(id, 'blueprint')] || false);
  setSeoAgentRunning(isRunning[getAgentKey(id, 'seo')] || false);
  set{Agent}AgentRunning(isRunning[getAgentKey(id, '{agent}')] || false);
}, [isRunning, id, getAgentKey]);
```

4. Add handler:
```javascript
const handleRun{Agent}Agent = async () => {
  clearError(id, '{agent}');
  try {
    await run{Agent}Agent(id);
    setTimeout(() => {
      getBlueprint(id);
    }, 3000);
  } catch (err) {
    // Error handled in hook
  }
};
```

5. Add button in agent buttons section:
```jsx
{!currentBlueprint.{agent}_strategy && (
  <Button
    onClick={handleRun{Agent}Agent}
    disabled={agentAgentRunning}
    className="bg-{color}-600 hover:bg-{color}-700 text-white"
  >
    {agentAgentRunning ? 'Running...' : '{Agent} Agent'}
  </Button>
)}
```

**Color suggestions**:
- Email: `indigo`
- GTM: `purple`
- Financial: `orange`
- Affiliate: `rose`
- Social: `pink`

6. Add execution status:
```jsx
{({agent}AgentRunning || error[getAgentKey(id, '{agent}')]) && (
  <AgentExecutionStatus
    isRunning={agentAgentRunning}
    estimatedTime="2-3 minutes"
    error={error[getAgentKey(id, '{agent}')]}
  />
)}
```

7. Add results display (before closing `<>` tag):
```jsx
{currentBlueprint.{agent}_strategy ? (
  <Card className="mb-6">
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{Agent} Strategy</h2>
      <div className="space-y-4">
        {typeof currentBlueprint.{agent}_strategy === 'string' ? (
          <div className="text-gray-600 whitespace-pre-wrap">{currentBlueprint.{agent}_strategy}</div>
        ) : (
          <pre className="bg-gray-50 p-3 rounded text-sm text-gray-700 overflow-auto">
            {JSON.stringify(currentBlueprint.{agent}_strategy, null, 2)}
          </pre>
        )}
      </div>
    </div>
  </Card>
) : null}
```

---

## Deployment Order (by ROI)

### 1. Email Agent (Next - Highest ROI)
- 40:1 email revenue potential
- Almost every business needs email strategy
- **Time**: ~30 min
- **Color**: `indigo`
- **Agent file**: `backend/app/agents/email_strategy_agent.py`

### 2. GTM Agent (Universal need)
- Every product launch needs GTM strategy
- Used across all industries
- **Time**: ~30 min
- **Color**: `purple`
- **Agent file**: `backend/app/agents/go_to_market_agent.py`

### 3. Financial Agent (Fundraising essential)
- Required for investor pitch
- Used by businesses seeking funding
- **Time**: ~30 min
- **Color**: `orange`
- **Agent file**: `backend/app/agents/financial_modeling_agent.py`

### 4. Affiliate Agent (High-leverage revenue)
- 20%+ revenue stream for mature businesses
- **Time**: ~30 min
- **Color**: `rose`
- **Agent file**: `backend/app/agents/affiliate_strategy_agent.py`

### 5. Social Agent (Growing importance)
- Essential for creator economy businesses
- Long-term growth channel
- **Time**: ~30 min
- **Color**: `pink`
- **Agent file**: `backend/app/agents/social_strategy_agent.py`

---

## Quick Reference - Agent Output Fields

### Email Agent
```
list_building
funnel_architecture
segmentation_strategy
email_sequences
automation
copy_templates
testing_and_optimization
implementation_roadmap
financial_projections
quick_wins
```

### GTM Agent
```
market_positioning
channel_strategy
sales_strategy
marketing_strategy
launch_plan
partnership_strategy
customer_acquisition
success_metrics
budget_allocation
risks_and_mitigations
quick_wins
```

### Financial Agent
```
assumptions
revenue_projections
cost_structure
unit_economics
cash_flow
profitability
funding_analysis
sensitivity_analysis
key_metrics
investor_ready_summary
risk_factors
```

### Affiliate Agent
```
program_structure
target_affiliates
recruitment_strategy
enablement_and_support
commission_optimization
technology_and_tracking
implementation_roadmap
legal_and_compliance
financial_projections
quick_wins
```

### Social Agent
```
platform_strategy
content_strategy
growth_strategy
engagement_framework
monetization
implementation_roadmap
tools_and_resources
success_metrics
```

---

## Testing Each Agent

After deployment:
1. Login as Pro/Elite user
2. Create blueprint
3. Click new agent button
4. Verify spinner appears
5. Wait 2-3 minutes
6. Verify results display
7. Verify button disappears
8. Test Starter tier gets 403

---

## Parallel Deployment Strategy

Deploy all 5 agents simultaneously:
1. Create all 5 service files
2. Add all 5 routes
3. Add all 5 API methods
4. Update hook with all 5 methods
5. Update UI with all 5 buttons, handlers, displays

**Total time**: ~2.5 hours for all 5 agents

---

## Summary

Use this template to deploy remaining agents at speed. Each agent takes:
- Service: 10 min
- Route: 5 min  
- API client: 3 min
- Hook: 5 min
- UI: 7 min
- **Total: ~30 min per agent**

All 5 remaining agents can be deployed in parallel or sequentially based on demand.

