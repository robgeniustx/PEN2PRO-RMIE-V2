import os

def calculate_funding_readiness_score(data):
    score = 0
    if (data.get('monthly_revenue') or 0) > 0: score += 20
    if (data.get('time_in_business_months') or 0) >= 6: score += 15
    for k in ['has_business_bank_statements','has_tax_returns','has_profit_loss_statement','has_business_plan','has_invoices_or_contracts','has_personal_credit_review']:
        if data.get(k): score += 10
    if data.get('funding_goal'): score += 5
    return min(score, 100)

def generate_document_checklist(data):
    return ["Business bank statements", "Recent tax returns", "Profit & loss statement", "Invoices or contracts"]

def generate_funding_path_options(data):
    return ["Community bank conversation", "CDFI lender programs", "Revenue-based options (evaluate carefully)", "SBA-aligned options via approved lenders"]

def generate_funding_readiness(data):
    score = calculate_funding_readiness_score(data)
    out = {"status":"success","readiness_score":score,"readiness_level":'high' if score>=75 else 'moderate' if score>=45 else 'early',"strengths":[],"gaps":[],"recommended_next_steps":["Improve missing documentation.","Stabilize cash flow records.","No funding approval is guaranteed."],"document_checklist":generate_document_checklist(data),"funding_path_options":generate_funding_path_options(data),"warnings":["Do not misrepresent revenue or alter documents."]}
    if not os.getenv('OPENAI_API_KEY'): out['status']='mock_fallback'
    return out
