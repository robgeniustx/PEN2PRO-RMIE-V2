from __future__ import annotations
"""
P2P AI Voice Agent — in-memory service layer.
Handles call records, scripts, dashboard metrics, CRM sync, and AI summaries.
Ready for MongoDB migration — replace list stores with Motor collections.
"""
import os
import uuid
from datetime import datetime, timezone
from typing import Any, List

from app.models.call_record import CallRecord
from app.models.voice_script import VoiceScript, ScriptStep

# ─── In-memory stores (replace with MongoDB in Phase 3) ───────────────────────
_CALL_RECORDS: List[CallRecord] = []
_SCRIPTS: List[VoiceScript] = []
_SETTINGS = {
    "business_name": "PEN2PRO",
    "agent_name": "PEN2PRO Intake Agent",
    "industry": "pressure-washing",
    "voice_provider": "demo",
    "phone_number": "",
    "transfer_number": "",
    "timezone": "America/Chicago",
    "business_hours_start": "08:00",
    "business_hours_end": "18:00",
    "after_hours_enabled": True,
    "missed_call_text_back": True,
    "crm_sync_enabled": True,
    "booking_enabled": True,
    "status": "demo_ready",
}

ELEVENLABS_EVENT_TYPES = {
    "post_call_transcription",
    "post_call_audio",
    "call_initiation_failure",
}


# ─── Industry script modes ────────────────────────────────────────────────────
INDUSTRY_SCRIPT_MODES = {
    "pressure-washing": {
        "greeting": "Thank you for calling! I'm the virtual assistant for [Business Name]. Are you looking for a quote or to schedule a pressure washing service today?",
        "qualify_questions": ["What type of property — home, driveway, or commercial?", "What's the approximate square footage?", "What city are you located in?"],
        "intake_questions": ["Is there any special concern like oil stains, mold, or concrete?", "Have you had pressure washing done before?", "What's your preferred date and time?"],
        "emergency_routing": False,
        "cta": "I'll schedule a free on-site estimate. Can I get your name and best number?",
        "follow_up_sms": "Hi {name}! This is {business}. We scheduled your estimate for {date}. Reply YES to confirm or call us to reschedule.",
        "crm_summary": "Lead interested in pressure washing. Property type: {property}. City: {city}. Estimate scheduled: {date}.",
        "disclaimer": None,
    },
    "hvac": {
        "greeting": "Thank you for calling! This is the virtual assistant for [Business Name] HVAC. Are you calling about a repair, service, or new installation?",
        "qualify_questions": ["Is this an emergency or routine service?", "What's the issue — cooling, heating, or both?", "How old is your system?"],
        "intake_questions": ["What's your address?", "Do you own or rent the property?", "Are you under a service agreement with anyone currently?"],
        "emergency_routing": True,
        "emergency_text": "If you have a gas leak or complete system failure, I'm transferring you to our emergency line now.",
        "cta": "Let me get a technician scheduled. What's the best time — morning or afternoon?",
        "follow_up_sms": "Hi {name}, your HVAC service with {business} is confirmed for {date}. Reply CONFIRM or call to reschedule.",
        "crm_summary": "HVAC lead. Issue: {issue}. System age: {age}. Emergency: {emergency}. Address: {address}.",
        "disclaimer": None,
    },
    "attorney-law-firm": {
        "greeting": "Thank you for calling [Firm Name]. I'm the intake coordinator. To protect your privacy, I do not provide legal advice. I can schedule a consultation with an attorney. What type of legal matter brings you to us today?",
        "qualify_questions": ["Is this a family law, criminal defense, personal injury, business, or other matter?", "Is this matter time-sensitive or do you have a court date coming up?", "Have you worked with an attorney on this matter before?"],
        "intake_questions": ["May I get your full name?", "Best phone number and email?", "Are you the party involved or contacting on behalf of someone else?"],
        "emergency_routing": True,
        "emergency_text": "If you have an immediate legal emergency such as an arrest, please let me connect you with our after-hours line.",
        "cta": "I'll schedule a consultation with one of our attorneys. They will review your matter and advise you on next steps.",
        "follow_up_sms": "Hi {name}, your consultation with {firm} is confirmed for {date}. Please bring any relevant documents. Reply CONFIRM to acknowledge.",
        "crm_summary": "Legal intake. Matter type: {matter}. Urgency: {urgency}. Contact: {name} | {phone} | {email}.",
        "disclaimer": "This intake call does not establish an attorney-client relationship. No legal advice is given during this call.",
    },
    "dentist-office": {
        "greeting": "Thank you for calling [Practice Name]! I'm the scheduling assistant. Are you a new or returning patient, and are you calling to schedule an appointment?",
        "qualify_questions": ["Are you in pain or is this a routine visit?", "Do you have dental insurance?", "Are you a new patient with us?"],
        "intake_questions": ["What's your full name and date of birth?", "What's your insurance provider?", "What date and time works best for you?"],
        "emergency_routing": True,
        "emergency_text": "If you're experiencing severe tooth pain or a dental emergency, I'll flag this as urgent and have someone call you back within the hour.",
        "cta": "Let me get you scheduled. For a routine cleaning, we have openings this week. Does morning or afternoon work better?",
        "follow_up_sms": "Hi {name}, your appointment at {practice} is confirmed for {date} at {time}. Reply CONFIRM to acknowledge.",
        "crm_summary": "Patient lead. New: {is_new}. Insurance: {insurance}. Type: {visit_type}. Appointment: {date}.",
        "disclaimer": "This scheduling line does not provide dental advice. Please describe your symptoms to our clinical team at your appointment.",
    },
    "funding-business": {
        "greeting": "Thank you for calling [Business Name] Funding Solutions. I'm the intake specialist. We help businesses access working capital, equipment financing, and business lines of credit. What type of funding are you exploring?",
        "qualify_questions": ["How long has your business been operating?", "What's your approximate monthly revenue?", "What do you need the funding for?"],
        "intake_questions": ["What's your business name and your name?", "Best email for follow-up?", "Do you have a business bank account?"],
        "emergency_routing": False,
        "cta": "Based on what you've shared, let me get a funding specialist to reach out to review your options. There's no obligation.",
        "follow_up_sms": "Hi {name}, thanks for your interest in {business} funding solutions. A specialist will contact you at {phone} within 1 business day.",
        "crm_summary": "Funding lead. Revenue: {revenue}. Time in business: {time}. Funding purpose: {purpose}. Has bank account: {bank}.",
        "disclaimer": "We do not guarantee funding approval. Approval is subject to lender review of business financials and credit.",
    },
    "courier-services": {
        "greeting": "Thank you for calling [Business Name] Courier! Are you looking to request a pickup, get a delivery quote, or check on an existing delivery?",
        "qualify_questions": ["Is this same-day or scheduled delivery?", "What's the pickup city and delivery city?", "What are you shipping — documents, packages, or freight?"],
        "intake_questions": ["What's the package size and weight?", "What's the pickup address?", "What's the delivery address?"],
        "emergency_routing": False,
        "cta": "I'll generate a quote and confirm availability. Can I get your name and best callback number?",
        "follow_up_sms": "Hi {name}! Your delivery quote from {business} is ready. Pickup: {pickup}. Delivery: {destination}. Rate: ${rate}. Reply YES to confirm.",
        "crm_summary": "Courier lead. Route: {pickup} to {destination}. Type: {type}. Size: {size}. Date: {date}.",
        "disclaimer": None,
    },
    "content-creator": {
        "greeting": "Thank you for reaching out to [Creator Name]! I'm the booking assistant. Are you a brand interested in a partnership, or are you looking for content, social media services, or digital products?",
        "qualify_questions": ["What type of content or service are you looking for?", "What's your budget range for this project?", "What's your brand or company name?"],
        "intake_questions": ["What's your contact name and email?", "What's your campaign or project timeline?", "Have you worked with influencers or creators before?"],
        "emergency_routing": False,
        "cta": "I'll have [Creator Name] reach out to discuss your project. Can I send you our media kit and partnership packages?",
        "follow_up_sms": "Hi {name}! Thanks for your interest in partnering with {creator}. Expect a follow-up within 24 hours with our media kit and rates.",
        "crm_summary": "Brand lead. Service type: {service}. Budget: {budget}. Brand: {brand}. Timeline: {timeline}.",
        "disclaimer": None,
    },
    "tree-service": {
        "greeting": "Thank you for calling [Business Name] Tree Service! Are you calling about an emergency tree situation or looking to schedule a tree trimming, removal, or estimate?",
        "qualify_questions": ["Is this an emergency — downed tree, hazard, or storm damage?", "What type of service — trimming, removal, stump grinding?", "What's your city and zip code?"],
        "intake_questions": ["How many trees are involved?", "Do any trees require equipment like a bucket truck or crane?", "What's the best address for the estimate?"],
        "emergency_routing": True,
        "emergency_text": "For emergency tree hazards, I'm flagging this as priority and connecting you with our on-call team immediately.",
        "cta": "Let me schedule a free on-site estimate. What day works for you?",
        "follow_up_sms": "Hi {name}! Your tree service estimate from {business} is scheduled for {date}. We'll call 30 minutes before arrival.",
        "crm_summary": "Tree service lead. Type: {service_type}. Emergency: {emergency}. Address: {address}. Trees: {count}.",
        "disclaimer": None,
    },
    "landscaping": {
        "greeting": "Thank you for calling [Business Name] Landscaping! Are you looking for regular maintenance, a one-time cleanup, or a full landscaping design project?",
        "qualify_questions": ["Is this residential or commercial?", "Are you looking for weekly, bi-weekly, or monthly maintenance?", "What's the approximate property size?"],
        "intake_questions": ["What services are you most interested in — mowing, edging, mulch, planting?", "What's your address?", "Do you have an HOA with any requirements?"],
        "emergency_routing": False,
        "cta": "I'll schedule a free estimate and design consultation. What day works for you this week?",
        "follow_up_sms": "Hi {name}! Your landscaping estimate from {business} is scheduled for {date}. Reply CONFIRM or call to reschedule.",
        "crm_summary": "Landscaping lead. Type: {service}. Frequency: {frequency}. Property size: {size}. Address: {address}.",
        "disclaimer": None,
    },
    "consulting": {
        "greeting": "Thank you for reaching out to [Firm Name]! I'm the intake coordinator. Are you looking to schedule a discovery call or learn more about our consulting services?",
        "qualify_questions": ["What business challenge are you trying to solve?", "Is this for a startup, small business, or enterprise?", "What's your timeline for getting help?"],
        "intake_questions": ["What's your name and company?", "Best email and phone?", "Have you worked with a consultant before?"],
        "emergency_routing": False,
        "cta": "Let me schedule a complimentary 30-minute discovery call. What's your availability this week or next?",
        "follow_up_sms": "Hi {name}, your discovery call with {firm} is confirmed for {date} at {time}. A calendar invite is on its way.",
        "crm_summary": "Consulting lead. Challenge: {challenge}. Company type: {type}. Timeline: {timeline}.",
        "disclaimer": None,
    },
    "ai-developer": {
        "greeting": "Thanks for reaching out to [Business Name]! I'm the scheduling assistant. Are you looking to discuss AI automation, a custom AI tool, SaaS development, or a consultation?",
        "qualify_questions": ["What problem are you trying to solve with AI?", "Do you have an existing system or are you starting fresh?", "What's your approximate budget range?"],
        "intake_questions": ["What's your company name and your role?", "Best email for a proposal or project brief?", "What's your ideal timeline?"],
        "emergency_routing": False,
        "cta": "I'll schedule a paid strategy session so we can scope your project. What day works?",
        "follow_up_sms": "Hi {name}! Thanks for your interest in {business}. A scoping session is confirmed for {date}. Expect a pre-call questionnaire.",
        "crm_summary": "AI dev lead. Problem: {problem}. Starting point: {start}. Budget: {budget}. Timeline: {timeline}.",
        "disclaimer": None,
    },
    "cell-phone-repair": {
        "greeting": "Thank you for calling [Business Name] Repair! Are you calling about a phone repair, TV repair, or another device issue?",
        "qualify_questions": ["What type of device — iPhone, Android, tablet, or TV?", "What's the issue — cracked screen, battery, water damage, or other?", "Is it still under manufacturer warranty?"],
        "intake_questions": ["What's the device model and approximate age?", "What's your name and phone number?", "Do you prefer drop-off, mail-in, or do we offer pickup in your area?"],
        "emergency_routing": False,
        "cta": "I'll provide a quote and availability. Can I get your name and best contact?",
        "follow_up_sms": "Hi {name}! Your repair quote from {business}: {quote}. Drop-off available {days}. Turnaround: {turnaround}. Reply to confirm.",
        "crm_summary": "Repair lead. Device: {device}. Issue: {issue}. Service type: {type}. Contact: {name} | {phone}.",
        "disclaimer": None,
    },
    "interior-designer": {
        "greeting": "Thank you for reaching [Business Name]! I'm the scheduling assistant. Are you looking for an interior design consultation, renovation guidance, or a full design project?",
        "qualify_questions": ["Is this residential or commercial?", "What spaces are involved — living room, bedroom, full home?", "Do you have a budget range in mind?"],
        "intake_questions": ["What's your name and email?", "What's the project address or location?", "What's your preferred style — modern, traditional, transitional?"],
        "emergency_routing": False,
        "cta": "I'll schedule an initial design consultation. We offer virtual and in-person options. What works best for you?",
        "follow_up_sms": "Hi {name}! Your consultation with {business} is scheduled for {date}. Feel free to share inspiration photos beforehand.",
        "crm_summary": "Design lead. Project type: {type}. Space: {space}. Budget: {budget}. Style preference: {style}.",
        "disclaimer": None,
    },
    "tshirt-company": {
        "greeting": "Thank you for calling [Business Name]! Are you looking to place a custom order, get a bulk quote, or ask about our existing designs?",
        "qualify_questions": ["Is this for personal, event, or business use?", "How many shirts are you looking for?", "Do you have artwork or do you need a design created?"],
        "intake_questions": ["What sizes and colors are you interested in?", "What's your deadline for this order?", "What's the best email to send a digital proof?"],
        "emergency_routing": False,
        "cta": "I'll send you a quote and a design questionnaire to your email. What's the best email address?",
        "follow_up_sms": "Hi {name}! Your custom order quote from {business} is on its way to {email}. Reply YES to get started or CALL to discuss.",
        "crm_summary": "T-shirt lead. Type: {type}. Quantity: {qty}. Has design: {has_design}. Deadline: {deadline}. Email: {email}.",
        "disclaimer": None,
    },
    "insurance-company": {
        "greeting": "Thank you for calling [Firm Name] Insurance. I'm the intake assistant. I don't provide policy advice, but I can connect you with a licensed agent and get your information started. Are you looking for a quote or do you have a question about an existing policy?",
        "qualify_questions": ["What type of insurance — auto, home, business, life, or health?", "Are you currently insured elsewhere?", "What's the reason for reaching out today?"],
        "intake_questions": ["What's your name and date of birth?", "Best phone and email?", "What's your zip code?"],
        "emergency_routing": True,
        "emergency_text": "If this is a claims emergency, I'll transfer you to our claims line now.",
        "cta": "I'll have a licensed agent contact you to go over your options. There's no obligation for a quote.",
        "follow_up_sms": "Hi {name}! A licensed agent from {firm} will call you at {phone} within 1 business day to review your insurance options.",
        "crm_summary": "Insurance lead. Type: {type}. Currently insured: {insured}. Zip: {zip}. Contact: {name} | {phone} | {email}.",
        "disclaimer": "This intake call does not constitute insurance advice or a binding policy. All coverage decisions are made by licensed agents.",
    },
    # ── Original 15 industries ────────────────────────────────────────────────
    "roofing": {
        "greeting": "Thank you for calling [Business Name] Roofing! Are you calling about a repair, replacement, inspection, or storm damage claim?",
        "qualify_questions": ["Is this an emergency — active leak or storm damage?", "What type of roofing — shingle, flat, metal?", "How old is the roof?"],
        "intake_questions": ["What's your address?", "Is the property owner available for the estimate?", "Have you filed an insurance claim?"],
        "emergency_routing": True,
        "emergency_text": "For active roof leaks, I'm flagging you as priority. We'll have someone contact you immediately.",
        "cta": "Let me schedule a free inspection. What day works for you?",
        "follow_up_sms": "Hi {name}! Your roofing inspection from {business} is scheduled for {date}. We'll call before arriving.",
        "crm_summary": "Roofing lead. Type: {type}. Emergency: {emergency}. Insurance: {insurance}. Address: {address}.",
        "disclaimer": None,
    },
    "plumbing": {
        "greeting": "Thank you for calling [Business Name] Plumbing! Is this an emergency or are you scheduling a routine service?",
        "qualify_questions": ["What's the issue — leak, blockage, water heater, or installation?", "Is water currently flowing or causing damage?", "Is this residential or commercial?"],
        "intake_questions": ["What's your address?", "How urgent is this — same day or can it wait?", "What's the best way to reach you?"],
        "emergency_routing": True,
        "emergency_text": "For active water damage or burst pipes, I'm connecting you to our emergency dispatch right now.",
        "cta": "I'll schedule the soonest available technician. What's your address?",
        "follow_up_sms": "Hi {name}! A {business} plumber is confirmed for {date} between {window}. Reply CONFIRM or call to reschedule.",
        "crm_summary": "Plumbing lead. Issue: {issue}. Emergency: {emergency}. Address: {address}. Urgency: {urgency}.",
        "disclaimer": None,
    },
    "lawn-care": {
        "greeting": "Thank you for calling [Business Name] Lawn Care! Are you looking for weekly maintenance, a one-time service, or a seasonal package?",
        "qualify_questions": ["Is this residential or commercial?", "What services — mowing, edging, fertilizing, weed control?", "How large is the property?"],
        "intake_questions": ["What's your address?", "When was the last time the lawn was serviced?", "Do you have any gates or dogs?"],
        "emergency_routing": False,
        "cta": "Let me get a free estimate scheduled. What's your address?",
        "follow_up_sms": "Hi {name}! Your lawn care estimate from {business} is scheduled for {date}. Reply CONFIRM or call us.",
        "crm_summary": "Lawn care lead. Service: {service}. Property: {size}. Address: {address}.",
        "disclaimer": None,
    },
    "auto-repair": {
        "greeting": "Thank you for calling [Business Name] Auto Repair! Are you calling to schedule a repair, get a quote, or check on a vehicle?",
        "qualify_questions": ["What's the year, make, and model?", "What's the issue or warning light?", "Is the vehicle drivable?"],
        "intake_questions": ["What's your name and best callback number?", "Do you need a tow or can you bring the vehicle in?", "When were you hoping to bring it in?"],
        "emergency_routing": True,
        "emergency_text": "If your vehicle is broken down, I can connect you with our towing partner.",
        "cta": "I'll schedule a diagnostic appointment. What day works for you?",
        "follow_up_sms": "Hi {name}! Your service appointment at {business} is confirmed for {date} at {time}.",
        "crm_summary": "Auto repair lead. Vehicle: {year} {make} {model}. Issue: {issue}. Drivable: {drivable}.",
        "disclaimer": None,
    },
    "barber-shop": {
        "greeting": "Thanks for calling [Shop Name]! Are you looking to book an appointment or ask about our services?",
        "qualify_questions": ["What service — haircut, beard trim, lineup, or full package?", "Do you have a preferred barber?", "Is this your first visit with us?"],
        "intake_questions": ["What's your name?", "What day and time works for you?", "Best number to confirm your appointment?"],
        "emergency_routing": False,
        "cta": "I'll book you right now. What's your preferred date and time?",
        "follow_up_sms": "Hi {name}! Your appointment at {shop} is confirmed for {date} at {time} with {barber}. Reply YES to confirm.",
        "crm_summary": "Barber appointment. Service: {service}. Barber: {barber}. Date: {date}.",
        "disclaimer": None,
    },
    "beauty-salon": {
        "greeting": "Thank you for calling [Salon Name]! Are you looking to book an appointment for hair, color, nails, or another service?",
        "qualify_questions": ["What service are you interested in today?", "Do you have a preferred stylist?", "Are you a new or returning client?"],
        "intake_questions": ["What's your name?", "What day and time works for you?", "Best phone or email for confirmation?"],
        "emergency_routing": False,
        "cta": "Let me check availability and get you booked. What day works?",
        "follow_up_sms": "Hi {name}! Your appointment at {salon} is confirmed for {date} at {time}. Reply CONFIRM to acknowledge.",
        "crm_summary": "Salon appointment. Service: {service}. Stylist: {stylist}. Client: {name}. Date: {date}.",
        "disclaimer": None,
    },
    "nail-salon": {
        "greeting": "Thank you for calling [Salon Name] Nails! Are you calling to book an appointment for a manicure, pedicure, or other nail service?",
        "qualify_questions": ["What services are you interested in?", "Do you have a preferred nail technician?", "Is this for one person or a group?"],
        "intake_questions": ["What's your name?", "Preferred date and time?", "Best number for reminders?"],
        "emergency_routing": False,
        "cta": "I'll book your appointment right now. What's your preferred date and time?",
        "follow_up_sms": "Hi {name}! Your nail appointment at {salon} is set for {date} at {time}. Reply YES to confirm.",
        "crm_summary": "Nail salon appointment. Service: {service}. Group: {group}. Date: {date}.",
        "disclaimer": None,
    },
    "massage-business": {
        "greeting": "Thank you for calling [Business Name] Massage! Are you calling to schedule a massage appointment or ask about our services?",
        "qualify_questions": ["What type — Swedish, deep tissue, sports, or prenatal?", "Is this for one person or a couple's session?", "Have you had massage therapy here before?"],
        "intake_questions": ["What's your name?", "Any injuries or health conditions we should know about?", "What day and time works for you?"],
        "emergency_routing": False,
        "cta": "Let me get you scheduled. What's your preferred date and time?",
        "follow_up_sms": "Hi {name}! Your massage at {business} is confirmed for {date} at {time}. Please arrive 10 minutes early.",
        "crm_summary": "Massage appointment. Type: {type}. Health notes: {notes}. Date: {date}.",
        "disclaimer": None,
    },
    "cleaning-company": {
        "greeting": "Thank you for calling [Business Name] Cleaning! Are you looking for a one-time deep clean, regular maintenance cleaning, or move-in/move-out service?",
        "qualify_questions": ["Is this residential or commercial?", "How many bedrooms and bathrooms?", "How often are you looking for service?"],
        "intake_questions": ["What's your address?", "Do you have pets?", "Any specific products you need us to use or avoid?"],
        "emergency_routing": False,
        "cta": "Let me schedule a free estimate or first cleaning. What's your availability?",
        "follow_up_sms": "Hi {name}! Your cleaning from {business} is confirmed for {date}. Our team will arrive between {window}.",
        "crm_summary": "Cleaning lead. Type: {type}. Size: {size}. Frequency: {frequency}. Address: {address}.",
        "disclaimer": None,
    },
    "mobile-detailing": {
        "greeting": "Thank you for calling [Business Name] Detailing! Are you looking to schedule a mobile detail for your car, truck, SUV, or fleet?",
        "qualify_questions": ["What package — basic wash, full interior/exterior, or ceramic coating?", "What's the year, make, and model?", "Where is the vehicle located for the detail?"],
        "intake_questions": ["What's your name?", "What day and time works?", "Is there a gate code or HOA we need to know about?"],
        "emergency_routing": False,
        "cta": "I'll confirm availability and get you booked. What's the vehicle location?",
        "follow_up_sms": "Hi {name}! Your mobile detail from {business} is confirmed for {date} at {time}. We'll call 30 min before arrival.",
        "crm_summary": "Detailing lead. Package: {package}. Vehicle: {vehicle}. Location: {location}. Date: {date}.",
        "disclaimer": None,
    },
    "handyman": {
        "greeting": "Thank you for calling [Business Name] Handyman Services! Are you calling to get a quote or schedule a repair?",
        "qualify_questions": ["What type of repair or project — drywall, plumbing, electrical, or general?", "Is this urgent or can it be scheduled within the week?", "Is this residential or commercial?"],
        "intake_questions": ["What's the address?", "Can you describe the job in a bit more detail?", "What's your budget range if you have one?"],
        "emergency_routing": True,
        "emergency_text": "For urgent repairs like burst pipes or electrical hazards, I'm flagging this as priority.",
        "cta": "Let me schedule a free estimate. What day works for you?",
        "follow_up_sms": "Hi {name}! Your handyman estimate from {business} is scheduled for {date}. Reply CONFIRM or call to reschedule.",
        "crm_summary": "Handyman lead. Job: {job}. Urgency: {urgency}. Address: {address}. Budget: {budget}.",
        "disclaimer": None,
    },
    "real-estate": {
        "greeting": "Thank you for calling [Agent/Company Name] Real Estate! Are you looking to buy, sell, or rent a property?",
        "qualify_questions": ["Are you buying, selling, or investing?", "What's your timeline — actively looking or exploring options?", "What area or zip code are you focused on?"],
        "intake_questions": ["Are you pre-approved for a mortgage or working with a lender?", "What's your price range?", "What's your name and best contact?"],
        "emergency_routing": False,
        "cta": "Let me schedule a consultation. What's the best time to connect this week?",
        "follow_up_sms": "Hi {name}! A real estate consultation with {agent} is confirmed for {date}. Talk soon!",
        "crm_summary": "Real estate lead. Intent: {intent}. Timeline: {timeline}. Price range: {range}. Area: {area}.",
        "disclaimer": None,
    },
    "general-small-biz": {
        "greeting": "Thank you for calling [Business Name]! How can I help you today?",
        "qualify_questions": ["What service or product are you interested in?", "Are you a new or returning customer?", "How did you hear about us?"],
        "intake_questions": ["What's your name and best number?", "What's the best time to reach you?", "Is there anything specific I should pass along?"],
        "emergency_routing": False,
        "cta": "I'll make sure someone follows up with you shortly. What's the best callback number?",
        "follow_up_sms": "Hi {name}! Thanks for contacting {business}. We'll be in touch soon. Reply CALL if you'd like us to call right away.",
        "crm_summary": "General lead. Service interest: {service}. Contact: {name} | {phone}. Source: {source}.",
        "disclaimer": None,
    },
}


def get_script_for_industry(industry_id: str) -> dict:
    """Return script mode for a given industry. Falls back to general."""
    return INDUSTRY_SCRIPT_MODES.get(industry_id, INDUSTRY_SCRIPT_MODES["general-small-biz"])


# ─── Call records ──────────────────────────────────────────────────────────────
def _serialize_call(call: CallRecord) -> dict[str, Any]:
    return call.model_dump(mode="json")


def _serialize_script(script: VoiceScript) -> dict[str, Any]:
    return script.model_dump(mode="json")


def _seed_voice_agent_data() -> None:
    if _SCRIPTS:
        return
    pressure = get_script_for_industry("pressure-washing")
    create_script(
        {
            "name": "Pressure Washing Quote Intake",
            "industry": "pressure-washing",
            "script_mode": "quote-intake",
            "greeting": pressure["greeting"],
            "steps": [
                {"order": 1, "type": "greeting", "text": pressure["greeting"]},
                {"order": 2, "type": "qualify", "text": "Ask property type, surface, city, urgency, and budget range."},
                {"order": 3, "type": "close", "text": pressure["cta"]},
            ],
            "is_active": True,
        }
    )
    create_call(
        {
            "caller_number": "+17135550192",
            "caller_name": "Maria Johnson",
            "direction": "inbound",
            "status": "completed",
            "duration_seconds": 264,
            "summary": "Maria requested a commercial pressure washing estimate for an apartment complex.",
            "transcript": "Caller needs exterior cleaning for an apartment complex in Houston. She asked for pricing and earliest availability.",
            "lead_captured": True,
            "appointment_booked": True,
            "follow_up_sent": False,
            "call_reason": "commercial bid request",
            "script_mode": "quote-intake",
        }
    )
    create_call(
        {
            "caller_number": "+18325550341",
            "caller_name": "David Ellis",
            "direction": "inbound",
            "status": "missed",
            "duration_seconds": 0,
            "summary": "Missed call. Text-back workflow queued.",
            "lead_captured": False,
            "appointment_booked": False,
            "follow_up_sent": True,
            "call_reason": "missed call",
            "script_mode": "after-hours",
        }
    )


def create_call(data: dict) -> dict:
    payload = dict(data)
    call_id = payload.pop("id", None) or str(uuid.uuid4())
    call = CallRecord(id=call_id, **payload)
    _CALL_RECORDS.append(call)
    return _serialize_call(call)


def list_calls(status: str = None, direction: str = None) -> list:
    _seed_voice_agent_data()
    results = _CALL_RECORDS
    if status:
        results = [c for c in results if c.status == status]
    if direction:
        results = [c for c in results if c.direction == direction]
    return [_serialize_call(c) for c in sorted(results, key=lambda c: c.created_at, reverse=True)]


def get_call(call_id: str) -> dict | None:
    _seed_voice_agent_data()
    call = next((c for c in _CALL_RECORDS if c.id == call_id), None)
    return _serialize_call(call) if call else None


def _get_call_model(call_id: str) -> CallRecord | None:
    _seed_voice_agent_data()
    return next((c for c in _CALL_RECORDS if c.id == call_id), None)


def update_call(call_id: str, payload: dict) -> dict | None:
    call = _get_call_model(call_id)
    if not call:
        return None
    for key, value in payload.items():
        if hasattr(call, key):
            setattr(call, key, value)
    call.updated_at = datetime.now(timezone.utc)
    return _serialize_call(call)


def upsert_call(data: dict) -> dict:
    call_id = data.get("id")
    if call_id and _get_call_model(call_id):
        return update_call(call_id, data) or {}
    return create_call(data)


# ─── Voice scripts ─────────────────────────────────────────────────────────────
def create_script(data: dict) -> dict:
    script = VoiceScript(id=str(uuid.uuid4()), **data)
    _SCRIPTS.append(script)
    return _serialize_script(script)


def list_scripts(industry: str = None) -> list:
    _seed_voice_agent_data()
    if industry:
        return [_serialize_script(s) for s in _SCRIPTS if s.industry == industry]
    return [_serialize_script(s) for s in _SCRIPTS]


def get_script(script_id: str) -> dict | None:
    _seed_voice_agent_data()
    script = next((s for s in _SCRIPTS if s.id == script_id), None)
    return _serialize_script(script) if script else None


# ─── Dashboard metrics ─────────────────────────────────────────────────────────
def get_dashboard_metrics() -> dict:
    _seed_voice_agent_data()
    total = len(_CALL_RECORDS)
    missed = sum(1 for c in _CALL_RECORDS if c.status == "missed")
    leads = sum(1 for c in _CALL_RECORDS if c.lead_captured)
    appts = sum(1 for c in _CALL_RECORDS if c.appointment_booked)
    follow_ups = sum(1 for c in _CALL_RECORDS if c.follow_up_sent)

    # Build top call reasons
    reason_counts: dict[str, int] = {}
    for c in _CALL_RECORDS:
        if c.call_reason:
            reason_counts[c.call_reason] = reason_counts.get(c.call_reason, 0) + 1
    top_reasons = sorted(reason_counts.items(), key=lambda x: x[1], reverse=True)[:5]

    return {
        "total_calls": total,
        "missed_calls": missed,
        "leads_captured": leads,
        "appointments_booked": appts,
        "follow_ups_sent": follow_ups,
        "estimated_recovered_revenue": leads * 250,  # $250 avg lead value placeholder
        "call_answer_rate": round((total - missed) / total * 100, 1) if total else 0,
        "lead_capture_rate": round(leads / total * 100, 1) if total else 0,
        "recent_calls": list_calls()[:10],
        "top_call_reasons": [{"reason": r, "count": n} for r, n in top_reasons],
        "active_scripts": sum(1 for s in _SCRIPTS if s.is_active),
        "settings": get_settings(),
    }


# ─── CRM sync ──────────────────────────────────────────────────────────────────
def sync_call_to_crm(call_id: str) -> dict:
    """Mark call as synced — in Phase 3 this writes to Command Center."""
    call = _get_call_model(call_id)
    if not call:
        return {"success": False, "error": "Call not found"}
    call.synced_to_crm = True
    call.updated_at = datetime.now(timezone.utc)
    return {
        "success": True,
        "call_id": call_id,
        "crm_note": call.summary or "Call recorded via P2P AI Voice Agent.",
        "lead_id": call.lead_id,
        "customer_id": call.customer_id,
    }


# ─── AI summaries (placeholder — real Twilio/OpenAI in Phase 3) ───────────────
async def generate_call_summary(call_data: dict) -> dict:
    api_key = os.getenv("OPENAI_API_KEY", "")
    caller = call_data.get("caller_name") or call_data.get("caller_number", "Unknown caller")
    reason = call_data.get("call_reason", "general inquiry")

    if not api_key:
        return {
            "summary": f"{caller} called regarding a {reason}. Lead captured: {call_data.get('lead_captured', False)}. "
                       f"Appointment booked: {call_data.get('appointment_booked', False)}.",
            "recommended_next_action": "Follow up within 24 hours via SMS.",
            "is_demo": True,
        }

    try:
        import httpx
        prompt = f"""Summarize this call in 2-3 sentences for a CRM note:
Caller: {caller}
Call reason: {reason}
Lead captured: {call_data.get('lead_captured')}
Appointment booked: {call_data.get('appointment_booked')}
Notes: {call_data.get('notes', 'None')}
Then recommend the single best next action."""

        async with httpx.AsyncClient(timeout=20.0) as client:
            resp = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
                json={
                    "model": os.getenv("OPENAI_MODEL_BLUEPRINT", "gpt-4o-mini"),
                    "messages": [{"role": "user", "content": prompt}],
                    "max_tokens": 200,
                },
            )
            resp.raise_for_status()
            text = resp.json()["choices"][0]["message"]["content"].strip()
            lines = text.split("\n")
            return {
                "summary": " ".join(lines[:-1]).strip() or text,
                "recommended_next_action": lines[-1].strip(),
                "is_demo": False,
            }
    except Exception as exc:
        return {
            "summary": f"Call from {caller} — {reason}.",
            "recommended_next_action": "Review call and follow up.",
            "is_demo": True,
            "error": str(exc),
        }


async def generate_follow_up_message(lead_data: dict) -> dict:
    name = lead_data.get("name", "there")
    service = lead_data.get("service", "our services")
    business = lead_data.get("business_name", "our team")
    channel = lead_data.get("channel", "sms")

    sms = f"Hi {name}! This is {business}. Thanks for your interest in {service}. We wanted to follow up — do you have any questions or are you ready to get started?"
    email_subject = f"Following up from {business}"
    email_body = f"Hi {name},\n\nThank you for reaching out about {service}. We'd love to help.\n\nWould you have 15 minutes this week to connect?\n\nBest,\n{business}"

    return {
        "sms": sms,
        "email_subject": email_subject,
        "email_body": email_body,
        "channel": channel,
        "is_demo": not bool(os.getenv("OPENAI_API_KEY")),
    }


def get_settings() -> dict:
    settings = dict(_SETTINGS)
    if os.getenv("ELEVENLABS_API_KEY"):
        settings["voice_provider"] = "elevenlabs"
        settings["elevenlabs_enabled"] = True
    else:
        settings["elevenlabs_enabled"] = False
    settings["elevenlabs_webhook_secret_configured"] = bool(
        os.getenv("ELEVENLABS_WEBHOOK_SECRET") or os.getenv("WEBHOOK_SECRET")
    )
    return settings


def update_settings(payload: dict) -> dict:
    allowed = set(_SETTINGS)
    for key, value in payload.items():
        if key in allowed:
            _SETTINGS[key] = value
    _SETTINGS["updated_at"] = datetime.now(timezone.utc).isoformat()
    return get_settings()


async def simulate_call(payload: dict) -> dict:
    industry = payload.get("industry") or _SETTINGS["industry"]
    business_name = payload.get("business_name") or _SETTINGS["business_name"]
    caller_name = payload.get("caller_name") or "Demo Caller"
    caller_number = payload.get("caller_number") or "+17135550100"
    call_reason = payload.get("call_reason") or "quote request"
    transcript = payload.get("transcript") or (
        f"{caller_name} called {business_name} about {call_reason}. "
        "The caller wants pricing, availability, and a follow-up appointment."
    )
    script = get_script_for_industry(industry)
    lead_captured = bool(payload.get("lead_captured", True))
    appointment_booked = bool(payload.get("appointment_booked", False))
    call = create_call(
        {
            "caller_number": caller_number,
            "caller_name": caller_name,
            "direction": payload.get("direction", "inbound"),
            "status": payload.get("status", "completed"),
            "duration_seconds": int(payload.get("duration_seconds", 180)),
            "transcript": transcript,
            "lead_captured": lead_captured,
            "appointment_booked": appointment_booked,
            "call_reason": call_reason,
            "script_mode": payload.get("script_mode", script.get("script_mode", "general")),
        }
    )
    summary = await generate_call_summary(call)
    model = _get_call_model(call["id"])
    if model:
        model.summary = summary["summary"]
        model.updated_at = datetime.now(timezone.utc)
    follow_up = await generate_follow_up_message(
        {
            "name": caller_name,
            "service": call_reason,
            "business_name": business_name,
            "channel": "sms",
        }
    )
    return {
        "call": get_call(call["id"]),
        "script": script,
        "summary": summary,
        "follow_up": follow_up,
        "crm_sync": sync_call_to_crm(call["id"]) if _SETTINGS.get("crm_sync_enabled") else {"success": False, "reason": "crm_sync_disabled"},
    }


def get_elevenlabs_status() -> dict:
    return {
        "provider": "elevenlabs",
        "api_key_configured": bool(os.getenv("ELEVENLABS_API_KEY")),
        "webhook_secret_configured": bool(os.getenv("ELEVENLABS_WEBHOOK_SECRET") or os.getenv("WEBHOOK_SECRET")),
        "agent_id_configured": bool(os.getenv("ELEVENLABS_AGENT_ID")),
        "webhook_path": "/api/voice-agent/webhook/elevenlabs",
        "supported_events": sorted(ELEVENLABS_EVENT_TYPES),
    }


def parse_elevenlabs_webhook_event(event: dict) -> dict:
    event_type = event.get("type", "unknown")
    data = event.get("data") or {}
    conversation_id = data.get("conversation_id") or data.get("id") or str(uuid.uuid4())
    transcript_items = data.get("transcript") or []
    transcript = _transcript_to_text(transcript_items)
    metadata = data.get("metadata") or {}
    analysis = data.get("analysis") or {}
    duration = metadata.get("call_duration_secs") or metadata.get("duration_seconds") or 0
    summary = analysis.get("transcript_summary") or data.get("summary") or ""
    call_successful = analysis.get("call_successful") or data.get("status") or "completed"
    caller = _extract_caller(data, metadata)
    call_reason = _extract_call_reason(analysis, data)
    call_record = {
        "id": conversation_id,
        "caller_number": caller.get("caller_number"),
        "caller_name": caller.get("caller_name"),
        "direction": "inbound",
        "status": "completed" if call_successful in {"success", "done", "completed"} else str(call_successful),
        "duration_seconds": int(duration or 0),
        "summary": summary or f"ElevenLabs {event_type} received for conversation {conversation_id}.",
        "transcript": transcript,
        "lead_captured": _analysis_bool(analysis, "lead_captured"),
        "appointment_booked": _analysis_bool(analysis, "appointment_booked"),
        "follow_up_sent": False,
        "call_reason": call_reason,
        "script_mode": "elevenlabs",
        "recording_url": data.get("recording_url") or data.get("audio_url"),
    }
    saved_call = upsert_call(call_record)
    follow_up = None
    if saved_call.get("lead_captured"):
        follow_up = {
            "recommended_channel": "sms",
            "message": f"Follow up with {saved_call.get('caller_name') or saved_call.get('caller_number') or 'the caller'} about {saved_call.get('call_reason') or 'their request'}.",
        }
    return {
        "received": True,
        "event_type": event_type,
        "conversation_id": conversation_id,
        "call": saved_call,
        "follow_up": follow_up,
        "crm_sync": sync_call_to_crm(saved_call["id"]) if saved_call and _SETTINGS.get("crm_sync_enabled") else None,
    }


def _transcript_to_text(transcript_items: list) -> str:
    lines = []
    for item in transcript_items:
        role = item.get("role", "speaker")
        message = item.get("message") or item.get("text") or ""
        if message:
            lines.append(f"{role}: {message}")
    return "\n".join(lines)


def _extract_caller(data: dict, metadata: dict) -> dict:
    phone_data = data.get("phone_call") or metadata.get("phone_call") or {}
    dynamic = data.get("conversation_initiation_client_data", {}).get("dynamic_variables", {})
    return {
        "caller_number": (
            phone_data.get("external_number")
            or phone_data.get("caller_number")
            or data.get("caller_number")
            or dynamic.get("phone")
        ),
        "caller_name": dynamic.get("user_name") or dynamic.get("name") or data.get("caller_name"),
    }


def _extract_call_reason(analysis: dict, data: dict) -> str:
    collected = analysis.get("data_collection_results") or {}
    for key in ["call_reason", "service_interest", "intent", "reason"]:
        value = collected.get(key)
        if isinstance(value, dict):
            return str(value.get("value") or value.get("result") or key)
        if value:
            return str(value)
    return data.get("status") or "ElevenLabs post-call transcription"


def _analysis_bool(analysis: dict, key: str) -> bool:
    collected = analysis.get("data_collection_results") or {}
    value = collected.get(key)
    if isinstance(value, dict):
        value = value.get("value") or value.get("result")
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        return value.lower() in {"true", "yes", "y", "1", "captured", "booked"}
    return False
