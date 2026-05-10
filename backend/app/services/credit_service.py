import os
from datetime import datetime

DOCUMENTS = {}
NEXT_ID = 1


def calculate_credit_readiness_score(data):
    keys = ["has_ein","has_business_bank","has_business_address","has_business_phone","has_business_email","has_website","has_bookkeeping","has_duns_number","has_vendor_accounts"]
    score = sum(1 for k in keys if data.get(k)) * 10
    if data.get('entity_type'):
        score += 10
    return min(score, 100)


def generate_vendor_credit_guidance(data):
    return ["Start with 2-3 net terms vendors that report payment history.", "Pay invoices early and keep records organized.", "No vendor credit or approvals are guaranteed."]


def generate_credit_education_notes(data):
    return ["This workspace is educational and organizational only.", "Do not submit disputes for information you know is accurate."]


def generate_credit_readiness(data):
    score = calculate_credit_readiness_score(data)
    level = 'high' if score >= 75 else 'moderate' if score >= 45 else 'early'
    checklist = [{"item": k.replace('has_','').replace('_',' '), "completed": bool(data.get(k))} for k in ["has_ein","has_business_bank","has_business_address","has_business_phone","has_business_email","has_website","has_bookkeeping","has_duns_number","has_vendor_accounts"]]
    missing = [c['item'] for c in checklist if not c['completed']]
    base = {
        "status": "success", "readiness_score": score, "readiness_level": level, "checklist": checklist,
        "missing_foundations": missing, "vendor_credit_guidance": generate_vendor_credit_guidance(data),
        "education_notes": generate_credit_education_notes(data), "next_steps": ["Complete missing foundations.", "Keep documents organized for future funding conversations.", "No credit repair or funding outcomes are guaranteed."]
    }
    if not os.getenv('OPENAI_API_KEY'):
        base['status'] = 'mock_fallback'
    return base


def generate_dispute_workspace(data):
    return {"status":"success","organizer_summary":"Organize your facts and supporting records before any correspondence.","evidence_checklist":["Account statements","ID verification","Any written correspondence"],"draft_letter_outline":["Identify account","State specific facts","Request investigation of disputed item"],"warnings":["No outcome is guaranteed.","Do not dispute accurate information."],"next_steps":["Review facts for accuracy.","Consult a qualified professional if needed."]}


def create_document_record(data):
    global NEXT_ID
    now = datetime.utcnow().isoformat()
    rec = {"id": NEXT_ID, **data, "created_at": now, "updated_at": now}
    DOCUMENTS[NEXT_ID] = rec
    NEXT_ID += 1
    return rec

def list_document_records(status=None, document_type=None):
    vals = list(DOCUMENTS.values())
    if status: vals = [v for v in vals if v.get('status') == status]
    if document_type: vals = [v for v in vals if v.get('document_type') == document_type]
    return vals

def get_document_record(document_id): return DOCUMENTS.get(document_id)

def update_document_record(document_id, data):
    if document_id not in DOCUMENTS: return None
    DOCUMENTS[document_id].update(data)
    DOCUMENTS[document_id]['updated_at'] = datetime.utcnow().isoformat()
    return DOCUMENTS[document_id]

def delete_document_record(document_id): return DOCUMENTS.pop(document_id, None)
