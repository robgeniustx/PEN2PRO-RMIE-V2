"""
Niche Marketing Service — PEN2PRO BusinessOS
Niche-specific funnel templates, automation templates, and website builder templates
for all 28 supported industries.
"""
from typing import Dict, Any, List, Optional


# ---------------------------------------------------------------------------
# AUTOMATION TEMPLATES
# ---------------------------------------------------------------------------

GENERAL_AUTOMATIONS: List[Dict[str, Any]] = [
    {
        "id": "new-lead-follow-up",
        "name": "New Lead Follow-Up",
        "trigger": "new_lead_created",
        "description": "Immediately follow up when a new lead is added to the CRM.",
        "steps": [
            {"delay_minutes": 0, "type": "sms", "message": "Hi {first_name}, this is {business_name}! Thanks for reaching out. We'll be in touch shortly to help you get started. Reply STOP to opt out."},
            {"delay_minutes": 30, "type": "email", "subject": "Thanks for contacting {business_name}", "body": "Hi {first_name},\n\nThank you for reaching out to {business_name}. We received your inquiry and will follow up within 1 business day.\n\nBest,\n{owner_name}\n{business_name}"},
            {"delay_hours": 24, "type": "task", "message": "Call {first_name} at {phone} — lead has not responded yet."},
        ],
    },
    {
        "id": "missed-call-textback",
        "name": "Missed Call Text-Back",
        "trigger": "missed_call",
        "description": "Send an instant SMS when a call is missed so you never lose a lead.",
        "steps": [
            {"delay_minutes": 0, "type": "sms", "message": "Hi! We just missed your call at {business_name}. We'd love to help — reply here or call us back at {phone_number}. Reply STOP to opt out."},
            {"delay_hours": 2, "type": "task", "message": "Follow up — missed call from {caller_number}. Check if lead was captured."},
        ],
    },
    {
        "id": "quote-sent-follow-up",
        "name": "Quote Sent Follow-Up",
        "trigger": "quote_status_changed_to_sent",
        "description": "Nurture a prospect after a quote is sent to increase close rate.",
        "steps": [
            {"delay_hours": 24, "type": "sms", "message": "Hi {first_name}, just checking in — did you have a chance to review your quote from {business_name}? Happy to answer any questions!"},
            {"delay_hours": 72, "type": "email", "subject": "Your quote is still available — {business_name}", "body": "Hi {first_name},\n\nYour quote is still active. We'd love to move forward when you're ready. Call or reply anytime.\n\n{owner_name}"},
            {"delay_hours": 120, "type": "task", "message": "Final follow-up call for quote sent to {first_name}. Consider offering a small incentive."},
        ],
    },
    {
        "id": "invoice-reminder",
        "name": "Invoice Payment Reminder",
        "trigger": "invoice_overdue",
        "description": "Automated reminders for overdue invoices.",
        "steps": [
            {"delay_days": 0, "type": "email", "subject": "Invoice Reminder — {invoice_number}", "body": "Hi {first_name},\n\nThis is a friendly reminder that invoice {invoice_number} for ${amount} is due. Please pay at your earliest convenience.\n\n{owner_name}"},
            {"delay_days": 3, "type": "sms", "message": "Hi {first_name}, invoice {invoice_number} for ${amount} is still outstanding. Need help? Reply here. — {business_name}"},
            {"delay_days": 7, "type": "task", "message": "Invoice {invoice_number} is 7 days overdue. Consider a direct call to {first_name} at {phone}."},
        ],
    },
    {
        "id": "appointment-confirmation",
        "name": "Appointment Confirmation",
        "trigger": "appointment_booked",
        "description": "Confirm appointments immediately after booking.",
        "steps": [
            {"delay_minutes": 0, "type": "sms", "message": "Hi {first_name}! Your appointment with {business_name} is confirmed for {appointment_date} at {appointment_time}. See you then! Reply STOP to opt out."},
            {"delay_minutes": 0, "type": "email", "subject": "Appointment Confirmed — {business_name}", "body": "Hi {first_name},\n\nYour appointment is confirmed:\n\nDate: {appointment_date}\nTime: {appointment_time}\nLocation: {location}\n\nIf you need to reschedule, contact us at {phone_number}.\n\n{owner_name}"},
        ],
    },
    {
        "id": "appointment-reminder",
        "name": "Appointment Reminder",
        "trigger": "appointment_upcoming",
        "description": "Reduce no-shows with timely reminders before appointments.",
        "steps": [
            {"delay_hours": -24, "type": "sms", "message": "Hi {first_name}, reminder: your appointment with {business_name} is TOMORROW at {appointment_time}. Reply YES to confirm or RESCHEDULE to change. Reply STOP to opt out."},
            {"delay_hours": -2, "type": "sms", "message": "Hi {first_name}, your appointment with {business_name} is in 2 hours at {appointment_time}. See you soon!"},
        ],
    },
    {
        "id": "review-request",
        "name": "Review Request",
        "trigger": "job_completed",
        "description": "Automatically request a Google or Facebook review after job completion.",
        "steps": [
            {"delay_hours": 2, "type": "sms", "message": "Hi {first_name}! Thanks for choosing {business_name}. We'd love your feedback — leave us a quick review here: {review_link}. It means a lot!"},
            {"delay_hours": 48, "type": "email", "subject": "How did we do? — {business_name}", "body": "Hi {first_name},\n\nThank you for your business! If you have a moment, we'd love a review:\n\n{review_link}\n\nThank you,\n{owner_name}"},
        ],
    },
    {
        "id": "lost-lead-reactivation",
        "name": "Lost Lead Reactivation",
        "trigger": "lead_status_changed_to_lost",
        "description": "Re-engage cold or lost leads 30 and 60 days after they went cold.",
        "steps": [
            {"delay_days": 30, "type": "sms", "message": "Hi {first_name}, it's {owner_name} from {business_name}. Just checking in — still interested in {service_type}? We may have a special offer for you. Reply anytime!"},
            {"delay_days": 60, "type": "email", "subject": "Still thinking about it? — {business_name}", "body": "Hi {first_name},\n\nWe haven't heard from you in a while. If you're still considering {service_type}, we'd love to reconnect and see how we can help.\n\n{owner_name}"},
        ],
    },
    {
        "id": "referral-request",
        "name": "Referral Request",
        "trigger": "payment_received",
        "description": "Ask satisfied customers to refer friends and family.",
        "steps": [
            {"delay_days": 3, "type": "sms", "message": "Hi {first_name}! Glad we could help. Know someone who needs {service_type}? Send them our way — we really appreciate referrals. 😊 — {business_name}"},
            {"delay_days": 7, "type": "email", "subject": "Know someone who could use our help? — {business_name}", "body": "Hi {first_name},\n\nThank you for your recent service! If you know anyone who could benefit from {service_type}, we'd love to help them too.\n\nRefer a friend and we'll take care of them like we took care of you.\n\n{owner_name}"},
        ],
    },
    {
        "id": "onboarding-sequence",
        "name": "New Customer Onboarding",
        "trigger": "customer_created",
        "description": "Welcome new customers and set expectations for the relationship.",
        "steps": [
            {"delay_minutes": 0, "type": "email", "subject": "Welcome to {business_name}!", "body": "Hi {first_name},\n\nWelcome! We're thrilled to have you. Here's what to expect next:\n\n1. We'll be in touch to confirm your first appointment.\n2. All communication will come from this number/email.\n3. If you ever need anything, just reply here.\n\n{owner_name}"},
            {"delay_days": 7, "type": "task", "message": "Check in with {first_name} — 7 days since they became a customer. Make sure everything is going well."},
        ],
    },
]


NICHE_AUTOMATIONS: Dict[str, List[Dict[str, Any]]] = {
    "pressure-washing": [
        {
            "id": "pw-seasonal-outreach",
            "name": "Seasonal Service Outreach",
            "trigger": "manual_or_scheduled",
            "description": "Reach past customers at the start of spring and fall for recurring work.",
            "steps": [
                {"delay_days": 0, "type": "sms", "message": "Hi {first_name}! Spring is here — is your property ready for a fresh wash? Book now and mention this text for 10% off. — {business_name}"},
                {"delay_days": 3, "type": "email", "subject": "Spring Cleaning Special — {business_name}", "body": "Hi {first_name},\n\nSpring is here and it's the perfect time for a full exterior wash. Reply or call to schedule.\n\n{owner_name}"},
            ],
        },
        {
            "id": "pw-before-after-request",
            "name": "Before/After Photo Request",
            "trigger": "job_completed",
            "description": "Request before/after photos for social proof after each job.",
            "steps": [
                {"delay_hours": 1, "type": "sms", "message": "Hi {first_name}! Your property looks great. Mind if we use before/after photos for our website/social media? Reply YES if that's OK with you. — {business_name}"},
            ],
        },
    ],
    "hvac": [
        {
            "id": "hvac-maintenance-reminder",
            "name": "Seasonal Maintenance Reminder",
            "trigger": "manual_or_scheduled",
            "description": "Remind customers to schedule seasonal HVAC maintenance.",
            "steps": [
                {"delay_days": 0, "type": "sms", "message": "Hi {first_name}, time for your seasonal HVAC tune-up! Schedule now before the rush — reply or call {phone_number}. — {business_name}"},
                {"delay_days": 5, "type": "email", "subject": "Don't forget your HVAC maintenance — {business_name}", "body": "Hi {first_name},\n\nRegular maintenance keeps your system running efficiently and prevents costly breakdowns. Schedule today.\n\n{owner_name}"},
            ],
        },
        {
            "id": "hvac-emergency-follow-up",
            "name": "Emergency Call Follow-Up",
            "trigger": "job_completed_emergency",
            "description": "Follow up after an emergency HVAC call to offer a maintenance plan.",
            "steps": [
                {"delay_days": 2, "type": "sms", "message": "Hi {first_name}, hope your system is running well! Consider a maintenance plan to prevent future emergencies. Interested? — {business_name}"},
            ],
        },
    ],
    "plumbing": [
        {
            "id": "plumbing-post-service-upsell",
            "name": "Post-Service Maintenance Upsell",
            "trigger": "job_completed",
            "description": "Offer a maintenance plan or annual inspection after service.",
            "steps": [
                {"delay_days": 3, "type": "sms", "message": "Hi {first_name}! Glad we could help. Protect your home year-round with our annual plumbing inspection plan. Interested? Reply for details. — {business_name}"},
            ],
        },
    ],
    "roofing": [
        {
            "id": "roofing-storm-outreach",
            "name": "Post-Storm Outreach",
            "trigger": "manual_weather_event",
            "description": "Reach out to past customers and local prospects after a major storm.",
            "steps": [
                {"delay_days": 0, "type": "sms", "message": "Hi {first_name}, after recent storms we're offering free roof inspections in your area. Limited slots — reply to book yours. — {business_name}"},
                {"delay_days": 2, "type": "email", "subject": "Free Post-Storm Roof Inspection — {business_name}", "body": "Hi {first_name},\n\nDon't wait until a small issue becomes a major problem. We're offering free post-storm inspections this week.\n\n{owner_name}"},
            ],
        },
    ],
    "real-estate": [
        {
            "id": "re-property-interest-follow-up",
            "name": "Property Interest Follow-Up",
            "trigger": "lead_viewed_listing",
            "description": "Follow up immediately when a prospect shows interest in a listing.",
            "steps": [
                {"delay_minutes": 15, "type": "sms", "message": "Hi {first_name}! I saw you were looking at {property_address}. Happy to answer questions or schedule a tour — {owner_name}, {business_name}."},
                {"delay_hours": 24, "type": "email", "subject": "Still interested in {property_address}?", "body": "Hi {first_name},\n\nI wanted to follow up about {property_address}. I'd love to schedule a showing at your convenience.\n\n{owner_name}"},
            ],
        },
    ],
    "cleaning-services": [
        {
            "id": "cleaning-recurring-booking",
            "name": "Recurring Booking Reminder",
            "trigger": "service_completed",
            "description": "Prompt customers to book their next recurring cleaning.",
            "steps": [
                {"delay_days": 25, "type": "sms", "message": "Hi {first_name}! It's almost time for your next cleaning. Want to keep your spot? Reply YES to confirm your next appointment. — {business_name}"},
            ],
        },
    ],
    "auto-detailing": [
        {
            "id": "detail-rebooking",
            "name": "Rebooking Reminder",
            "trigger": "job_completed",
            "description": "Remind customers to rebook their next detail after 4-6 weeks.",
            "steps": [
                {"delay_days": 35, "type": "sms", "message": "Hi {first_name}! Your vehicle is probably due for another detail. Book now and keep it looking sharp. — {business_name}"},
            ],
        },
    ],
    "landscaping": [
        {
            "id": "landscaping-seasonal",
            "name": "Seasonal Service Promotion",
            "trigger": "manual_or_scheduled",
            "description": "Promote spring cleanup, summer maintenance, fall leaf removal, winter prep.",
            "steps": [
                {"delay_days": 0, "type": "sms", "message": "Hi {first_name}! {season} is here — time for {seasonal_service}. Book now before slots fill up. — {business_name}"},
                {"delay_days": 5, "type": "email", "subject": "{season} Landscaping Special — {business_name}", "body": "Hi {first_name},\n\nKeep your property looking great this {season}. We have limited availability — reply to schedule.\n\n{owner_name}"},
            ],
        },
    ],
    "tree-service": [
        {
            "id": "tree-post-storm",
            "name": "Post-Storm Emergency Outreach",
            "trigger": "manual_weather_event",
            "description": "Reach out after storms for emergency tree removal and cleanup.",
            "steps": [
                {"delay_days": 0, "type": "sms", "message": "Hi {first_name}! Did the recent storm affect any trees on your property? We offer emergency removal and cleanup. Call {phone_number} — {business_name}."},
            ],
        },
    ],
    "funding-business": [
        {
            "id": "funding-readiness-follow-up",
            "name": "Funding Readiness Nurture",
            "trigger": "lead_intake_completed",
            "description": "Nurture leads through funding readiness steps.",
            "steps": [
                {"delay_hours": 1, "type": "email", "subject": "Your Funding Readiness Checklist — {business_name}", "body": "Hi {first_name},\n\nThank you for connecting with {business_name}. Here is your funding readiness checklist to review before our next call:\n\n1. Personal credit score (aim for 680+)\n2. Business entity (LLC/Corp) registered\n3. EIN obtained\n4. Business bank account open (90 days minimum)\n5. 3 months business bank statements\n6. Business address established\n\nWe'll review these together on our call.\n\nDisclaimer: {business_name} does not guarantee funding approval.\n\n{owner_name}"},
                {"delay_days": 2, "type": "task", "message": "Call {first_name} to review funding readiness checklist. Check credit, entity status, and bank history."},
            ],
        },
    ],
    "attorney-law-firm": [
        {
            "id": "attorney-intake-confirmation",
            "name": "Legal Intake Confirmation",
            "trigger": "lead_intake_completed",
            "description": "Confirm intake submission and set expectations. Includes disclaimer.",
            "steps": [
                {"delay_minutes": 0, "type": "email", "subject": "Intake Received — {business_name}", "body": "Hi {first_name},\n\nThank you for submitting your intake form. A member of our team will contact you within 1 business day to discuss your matter.\n\nIMPORTANT: This communication does not establish an attorney-client relationship. No legal advice is being provided at this stage.\n\n{owner_name}\n{business_name}"},
                {"delay_hours": 4, "type": "task", "message": "Review intake from {first_name} and assign to appropriate attorney. Check conflict of interest."},
            ],
        },
    ],
    "dentist-office": [
        {
            "id": "dentist-recall",
            "name": "6-Month Recall Reminder",
            "trigger": "appointment_completed",
            "description": "Remind patients to book their 6-month checkup.",
            "steps": [
                {"delay_days": 150, "type": "sms", "message": "Hi {first_name}! It's almost time for your 6-month checkup at {business_name}. Call or reply to schedule. We look forward to seeing you!"},
                {"delay_days": 165, "type": "email", "subject": "Time for your checkup — {business_name}", "body": "Hi {first_name},\n\nRegular checkups help prevent small issues from becoming big problems. Book your appointment today.\n\n{owner_name}"},
            ],
        },
    ],
    "courier-services": [
        {
            "id": "courier-repeat-booking",
            "name": "Repeat Delivery Prompt",
            "trigger": "delivery_completed",
            "description": "Encourage repeat bookings after each completed delivery.",
            "steps": [
                {"delay_hours": 2, "type": "sms", "message": "Hi {first_name}! Delivery complete. Need another pickup or delivery? Book anytime at {booking_link}. — {business_name}"},
            ],
        },
    ],
    "content-creator": [
        {
            "id": "creator-deliverable-follow-up",
            "name": "Content Deliverable Follow-Up",
            "trigger": "project_delivered",
            "description": "Follow up after delivering content to request feedback and referrals.",
            "steps": [
                {"delay_days": 2, "type": "email", "subject": "How's the content working? — {business_name}", "body": "Hi {first_name},\n\nJust checking in on the recent content we delivered. Is everything working well for you? We'd love your feedback and are ready to help with your next project.\n\n{owner_name}"},
                {"delay_days": 7, "type": "sms", "message": "Hi {first_name}! Did the content hit the mark? Reply anytime — happy to adjust or start the next project. — {business_name}"},
            ],
        },
    ],
    "consulting": [
        {
            "id": "consulting-check-in",
            "name": "Client Progress Check-In",
            "trigger": "milestone_reached",
            "description": "Check in with clients at key project milestones.",
            "steps": [
                {"delay_days": 0, "type": "email", "subject": "Milestone Check-In — {business_name}", "body": "Hi {first_name},\n\nWe've reached the {milestone_name} phase of your project. I wanted to check in, gather feedback, and make sure we're aligned on next steps.\n\nLet's connect this week if possible.\n\n{owner_name}"},
            ],
        },
    ],
    "ai-developer": [
        {
            "id": "ai-dev-sprint-update",
            "name": "Sprint Update Notification",
            "trigger": "sprint_completed",
            "description": "Keep clients informed at the end of each development sprint.",
            "steps": [
                {"delay_days": 0, "type": "email", "subject": "Sprint Update — {sprint_name} — {business_name}", "body": "Hi {first_name},\n\nHere's a summary of what was completed in {sprint_name}:\n\n{sprint_summary}\n\nNext sprint begins: {next_sprint_start}\n\nPlease review and let us know if you have any questions.\n\n{owner_name}"},
            ],
        },
    ],
    "cell-phone-repair": [
        {
            "id": "repair-ready-notification",
            "name": "Repair Ready Notification",
            "trigger": "repair_status_changed_to_complete",
            "description": "Notify customer when their device is ready for pickup.",
            "steps": [
                {"delay_minutes": 0, "type": "sms", "message": "Hi {first_name}! Your {device_type} is ready for pickup at {business_name}. Hours: {business_hours}. See you soon!"},
            ],
        },
    ],
    "interior-designer": [
        {
            "id": "design-concept-follow-up",
            "name": "Design Concept Follow-Up",
            "trigger": "proposal_sent",
            "description": "Follow up after sending a design concept proposal.",
            "steps": [
                {"delay_days": 2, "type": "email", "subject": "Thoughts on your design concept? — {business_name}", "body": "Hi {first_name},\n\nI hope you've had a chance to review the design concept I sent over. I'd love to hear your thoughts and discuss any adjustments.\n\n{owner_name}"},
                {"delay_days": 5, "type": "sms", "message": "Hi {first_name}! Did you get a chance to review the design concept? Reply or call anytime — I'm here to help. — {business_name}"},
            ],
        },
    ],
    "tshirt-company": [
        {
            "id": "tshirt-order-follow-up",
            "name": "Order Completion + Reorder Prompt",
            "trigger": "order_shipped",
            "description": "Follow up after order delivery and prompt reorder or new design.",
            "steps": [
                {"delay_days": 5, "type": "sms", "message": "Hi {first_name}! Hope you love your order from {business_name}. Need more? Use code REORDER10 for 10% off your next order. Shop: {shop_link}"},
            ],
        },
    ],
    "insurance-company": [
        {
            "id": "insurance-renewal-reminder",
            "name": "Policy Renewal Reminder",
            "trigger": "policy_expiring_soon",
            "description": "Remind policyholders about upcoming policy renewals.",
            "steps": [
                {"delay_days": -60, "type": "email", "subject": "Your policy renews in 60 days — {business_name}", "body": "Hi {first_name},\n\nYour policy renews on {renewal_date}. Now is a great time to review your coverage and make any changes.\n\nThis is a reminder only and does not constitute insurance advice.\n\n{owner_name}"},
                {"delay_days": -30, "type": "sms", "message": "Hi {first_name}! Your policy with {business_name} renews in 30 days. Questions? Reply or call {phone_number}. Reply STOP to opt out."},
                {"delay_days": -7, "type": "task", "message": "Final renewal follow-up for {first_name}. Policy expires {renewal_date}. Confirm renewal or update coverage."},
            ],
        },
    ],
}


# ---------------------------------------------------------------------------
# FUNNEL TEMPLATES
# ---------------------------------------------------------------------------

NICHE_FUNNELS: Dict[str, Dict[str, Any]] = {
    "pressure-washing": {
        "landing_page": {
            "headline": "Professional Pressure Washing — {city} & Surrounding Areas",
            "subheadline": "We transform dirty driveways, roofs, patios, and exteriors into clean, refreshed surfaces. Fast. Reliable. Guaranteed.",
            "hero_cta": "Get Your Free Quote",
            "trust_badges": ["Fully Insured", "Licensed & Bonded", "100% Satisfaction Guarantee", "Same-Week Service Available"],
            "services_section": ["Driveway Cleaning", "House Washing", "Roof Soft Wash", "Deck & Patio Cleaning", "Commercial Pressure Washing"],
        },
        "lead_capture_form": {
            "headline": "Get a Free Pressure Washing Quote",
            "fields": ["Name", "Phone", "Email", "Address", "Service Needed", "Property Type (Residential/Commercial)", "Preferred Date"],
            "submit_cta": "Request My Free Quote",
            "confirmation_message": "Thanks! We'll contact you within 24 hours with your free quote.",
        },
        "thank_you_page": {
            "headline": "Your Quote Request Was Received!",
            "subheadline": "We'll be in touch within 24 hours.",
            "next_steps": ["Check your email for a confirmation", "We'll call you to schedule your estimate", "Sit back — your property is about to look amazing"],
        },
        "follow_up_sequence": {
            "sms_1": "Hi {first_name}! We received your quote request. Expect a call within 24 hours. — {business_name}",
            "email_1_subject": "Your Quote Request — {business_name}",
            "email_1_body": "Hi {first_name}, thank you for requesting a quote! We'll reach out shortly to schedule your free estimate.",
        },
        "pipeline_stages": ["New Lead", "Quote Requested", "Quote Sent", "Estimate Scheduled", "Job Scheduled", "Job Completed", "Invoice Sent", "Paid", "Review Requested"],
    },
    "funding-business": {
        "landing_page": {
            "headline": "Business Funding Ready — Let's Build Your Approval Profile",
            "subheadline": "We help entrepreneurs prepare for business loans, lines of credit, SBA funding, and private capital. No guarantees — real readiness.",
            "hero_cta": "Start My Funding Readiness Review",
            "trust_badges": ["No Credit Guarantee", "Education-First Approach", "Step-by-Step Readiness Plan", "Built for Business Owners"],
            "services_section": ["Funding Readiness Assessment", "Business Credit Building", "Entity Setup Guidance", "Documentation Prep", "Lender Matching Strategy"],
            "disclaimer": "We do not guarantee loan approval, funding, or credit improvements. We provide education and preparation support only.",
        },
        "lead_capture_form": {
            "headline": "Get Your Free Funding Readiness Assessment",
            "fields": ["Business Name", "Owner Name", "Phone", "Email", "Business Type", "Time in Business", "Estimated Revenue", "Funding Goal", "Primary Obstacle"],
            "submit_cta": "Start My Assessment",
            "confirmation_message": "Thanks! A funding advisor will contact you within 1 business day.",
        },
        "pipeline_stages": ["Inquiry", "Readiness Assessment", "Document Collection", "Credit Review", "Entity/Bank Setup", "Lender Match", "Application Submitted", "Funded", "Closed/Lost"],
    },
    "attorney-law-firm": {
        "landing_page": {
            "headline": "Experienced Legal Representation — {practice_area} Attorney",
            "subheadline": "Protecting your rights, your family, and your future. Schedule a free consultation today.",
            "hero_cta": "Schedule a Free Consultation",
            "trust_badges": ["Licensed Attorney", "Confidential Consultation", "No Upfront Fee (Contingency Cases)", "Local & Trusted"],
            "disclaimer": "This website does not establish an attorney-client relationship. Contacting us does not create legal representation.",
        },
        "lead_capture_form": {
            "headline": "Request a Free Legal Consultation",
            "fields": ["Full Name", "Phone", "Email", "Practice Area Needed", "Brief Description of Matter", "Preferred Consultation Date", "How Did You Hear About Us"],
            "submit_cta": "Request My Consultation",
            "confirmation_message": "Thank you. A member of our team will contact you within 1 business day. This does not establish legal representation.",
        },
        "pipeline_stages": ["Intake", "Conflict Check", "Consultation Scheduled", "Consultation Completed", "Retainer Sent", "Retained", "Active Matter", "Closed Won", "Closed No Hire"],
    },
    "dentist-office": {
        "landing_page": {
            "headline": "Your Family Dentist in {city} — New Patients Welcome",
            "subheadline": "Comprehensive dental care for the whole family. Accepting most insurance. Same-day appointments available.",
            "hero_cta": "Book Your First Appointment",
            "trust_badges": ["Accepting New Patients", "Most Insurance Accepted", "Family-Friendly", "Same-Day Emergency Appointments"],
            "disclaimer": "This website does not provide dental advice. Contact our office for medical guidance.",
        },
        "lead_capture_form": {
            "headline": "Request a New Patient Appointment",
            "fields": ["Full Name", "Phone", "Email", "Date of Birth", "Insurance Provider", "Service Needed", "Preferred Appointment Date", "New or Returning Patient"],
            "submit_cta": "Request My Appointment",
        },
        "pipeline_stages": ["New Patient Inquiry", "Insurance Verified", "Appointment Scheduled", "Pre-Visit Paperwork", "Appointment Completed", "Treatment Plan Sent", "Treatment Scheduled", "Follow-Up Care", "Recall (6-month)"],
    },
    "courier-services": {
        "landing_page": {
            "headline": "Same-Day Delivery Service — {city} Metro",
            "subheadline": "Fast, reliable, insured courier services for individuals and businesses. Book in minutes.",
            "hero_cta": "Book a Delivery Now",
            "trust_badges": ["Same-Day Delivery", "Real-Time Tracking", "Insured & Reliable", "Business Accounts Available"],
        },
        "lead_capture_form": {
            "headline": "Book Your Delivery",
            "fields": ["Your Name", "Phone", "Email", "Pickup Address", "Delivery Address", "Package Description", "Package Size", "Preferred Pickup Time", "Is This a Rush Delivery?"],
            "submit_cta": "Book My Delivery",
        },
        "pipeline_stages": ["Booking Received", "Driver Assigned", "Pickup Confirmed", "In Transit", "Delivered", "Confirmed by Recipient", "Invoice Sent", "Paid"],
    },
    "content-creator": {
        "landing_page": {
            "headline": "Content That Converts — Video, Copy, and Brand Strategy",
            "subheadline": "We create content that builds your brand, grows your audience, and drives revenue.",
            "hero_cta": "Get a Free Content Audit",
            "trust_badges": ["Brand Strategy", "Video Production", "Copywriting", "Social Media Management"],
        },
        "lead_capture_form": {
            "headline": "Request a Free Content Consultation",
            "fields": ["Your Name", "Business Name", "Phone", "Email", "Current Platform(s)", "Content Goals", "Monthly Budget Range", "Biggest Content Challenge"],
            "submit_cta": "Start My Consultation",
        },
        "pipeline_stages": ["Lead", "Discovery Call", "Proposal Sent", "Proposal Accepted", "Onboarding", "Content Creation", "Review & Revisions", "Delivered", "Monthly Retainer"],
    },
    "consulting": {
        "landing_page": {
            "headline": "Strategic Consulting for {industry} Businesses",
            "subheadline": "We help businesses solve problems, optimize systems, and scale revenue with expert guidance.",
            "hero_cta": "Book a Strategy Call",
        },
        "lead_capture_form": {
            "headline": "Book a Free Strategy Call",
            "fields": ["Full Name", "Company Name", "Phone", "Email", "Industry", "Company Size", "Primary Challenge", "Revenue Goal"],
            "submit_cta": "Book My Call",
        },
        "pipeline_stages": ["Inquiry", "Discovery Call", "Proposal", "Contract Sent", "Onboarding", "Active Engagement", "Project Complete", "Retainer", "Closed"],
    },
    "tree-service": {
        "landing_page": {
            "headline": "Professional Tree Removal & Trimming — {city}",
            "subheadline": "Licensed, insured, and ready to handle any tree service job safely and efficiently.",
            "hero_cta": "Get a Free Tree Service Estimate",
            "trust_badges": ["Licensed & Insured", "Free Estimates", "Emergency Service Available", "ISA Certified Arborist"],
        },
        "lead_capture_form": {
            "headline": "Get Your Free Tree Service Estimate",
            "fields": ["Name", "Phone", "Email", "Address", "Service Type", "Number of Trees", "Tree Size (approx)", "Emergency?"],
            "submit_cta": "Request My Free Estimate",
        },
        "pipeline_stages": ["New Lead", "Estimate Requested", "Site Visit Scheduled", "Estimate Sent", "Job Scheduled", "Job In Progress", "Job Completed", "Invoice Sent", "Paid"],
    },
    "landscaping": {
        "landing_page": {
            "headline": "Beautiful Landscaping Services — {city} & Surrounding Areas",
            "subheadline": "Lawn care, landscape design, and seasonal maintenance for residential and commercial properties.",
            "hero_cta": "Get a Free Landscape Quote",
        },
        "lead_capture_form": {
            "headline": "Get Your Free Landscaping Quote",
            "fields": ["Name", "Phone", "Email", "Address", "Service Needed", "Property Size", "Frequency (One-Time / Recurring)", "Preferred Start Date"],
            "submit_cta": "Get My Quote",
        },
        "pipeline_stages": ["Lead", "Quote Requested", "Site Visit", "Proposal Sent", "Contract Signed", "Service Started", "Recurring Active", "Invoice Sent", "Paid"],
    },
    "ai-developer": {
        "landing_page": {
            "headline": "Custom AI Development — Automate, Accelerate, Scale",
            "subheadline": "We build AI-powered apps, automation workflows, and custom integrations for businesses ready to compete in the AI era.",
            "hero_cta": "Schedule a Discovery Call",
        },
        "lead_capture_form": {
            "headline": "Tell Us About Your AI Project",
            "fields": ["Full Name", "Company", "Phone", "Email", "Project Description", "Tech Stack (if known)", "Timeline", "Budget Range"],
            "submit_cta": "Schedule My Discovery Call",
        },
        "pipeline_stages": ["Inquiry", "Discovery Call", "Technical Assessment", "Proposal Sent", "Contract Signed", "Development Started", "Testing", "Delivered", "Maintenance Retainer"],
    },
    "cell-phone-repair": {
        "landing_page": {
            "headline": "Fast Phone & Device Repair — {city}",
            "subheadline": "Cracked screens, battery replacements, water damage, and more. Most repairs done same day.",
            "hero_cta": "Get a Repair Quote",
        },
        "lead_capture_form": {
            "headline": "Get a Quick Repair Quote",
            "fields": ["Name", "Phone", "Email", "Device Brand & Model", "Issue Description", "Preferred Drop-Off Date"],
            "submit_cta": "Get My Quote",
        },
        "pipeline_stages": ["Inquiry", "Quote Sent", "Device Dropped Off", "Diagnosis Complete", "Repair In Progress", "Repair Complete", "Customer Notified", "Picked Up", "Paid"],
    },
    "interior-designer": {
        "landing_page": {
            "headline": "Interior Design That Reflects You — {city}",
            "subheadline": "Residential and commercial interior design services that transform spaces into experiences.",
            "hero_cta": "Book a Design Consultation",
        },
        "lead_capture_form": {
            "headline": "Request a Design Consultation",
            "fields": ["Name", "Phone", "Email", "Project Type (Residential/Commercial)", "Space Description", "Design Style Preference", "Budget Range", "Timeline"],
            "submit_cta": "Book My Consultation",
        },
        "pipeline_stages": ["Lead", "Consultation Booked", "Consultation Completed", "Concept Proposal", "Proposal Accepted", "Design Phase", "Procurement", "Installation", "Project Complete"],
    },
    "tshirt-company": {
        "landing_page": {
            "headline": "Custom T-Shirts & Branded Apparel — Fast Turnaround",
            "subheadline": "Screen printing, embroidery, DTG, and sublimation for businesses, events, teams, and creators.",
            "hero_cta": "Start Your Custom Order",
        },
        "lead_capture_form": {
            "headline": "Get a Custom Order Quote",
            "fields": ["Name", "Company/Brand", "Phone", "Email", "Product Type", "Quantity", "Design Description (or Upload)", "Deadline Date"],
            "submit_cta": "Request My Quote",
        },
        "pipeline_stages": ["Inquiry", "Quote Sent", "Design Approved", "Order Confirmed", "In Production", "Quality Check", "Shipped/Ready for Pickup", "Delivered", "Invoice Paid"],
    },
    "insurance-company": {
        "landing_page": {
            "headline": "Insurance Solutions for Individuals & Businesses — {city}",
            "subheadline": "Life, health, auto, home, and commercial insurance. Let us help you find the right coverage.",
            "hero_cta": "Get a Free Insurance Review",
            "trust_badges": ["Licensed Insurance Agent", "Multiple Carriers", "No Obligation Review", "Local & Trusted"],
            "disclaimer": "This website does not provide insurance advice. All quotes subject to underwriting approval.",
        },
        "lead_capture_form": {
            "headline": "Request Your Free Insurance Review",
            "fields": ["Full Name", "Phone", "Email", "Type of Insurance Needed", "Current Provider (if any)", "Coverage Amount Needed", "Age / Date of Birth (for life/health)", "Preferred Contact Method"],
            "submit_cta": "Request My Free Review",
            "confirmation_message": "Thank you! An agent will contact you within 1 business day. This does not constitute a policy offer.",
        },
        "pipeline_stages": ["Inquiry", "Needs Assessment", "Quote Requested", "Quote Sent", "Policy Review", "Application Submitted", "Underwriting", "Policy Issued", "Active Client", "Annual Renewal"],
    },
}

# Fill in any industries that don't have specific funnel templates with a generic one
_GENERIC_FUNNEL = {
    "landing_page": {
        "headline": "{business_name} — Professional {industry} Services",
        "subheadline": "Quality service, reliable results. Contact us today for a free consultation.",
        "hero_cta": "Contact Us Today",
        "trust_badges": ["Licensed & Insured", "Free Estimates", "Satisfaction Guaranteed", "Local & Trusted"],
    },
    "lead_capture_form": {
        "headline": "Request a Free Consultation",
        "fields": ["Name", "Phone", "Email", "Service Needed", "Message"],
        "submit_cta": "Request My Consultation",
        "confirmation_message": "Thanks! We'll be in touch within 1 business day.",
    },
    "pipeline_stages": ["New Lead", "Contacted", "Quote Sent", "Job Scheduled", "Completed", "Invoiced", "Paid"],
}


def get_funnel_template(industry_id: str) -> Dict[str, Any]:
    return NICHE_FUNNELS.get(industry_id, _GENERIC_FUNNEL)


def get_automations(industry_id: Optional[str] = None) -> Dict[str, Any]:
    """Return general automations + niche-specific automations for the given industry."""
    result = {
        "general": GENERAL_AUTOMATIONS,
        "niche": NICHE_AUTOMATIONS.get(industry_id or "", []),
    }
    return result


def get_all_automations_for_industry(industry_id: str) -> List[Dict[str, Any]]:
    """Flat list of all automations (general + niche) for a given industry."""
    return GENERAL_AUTOMATIONS + NICHE_AUTOMATIONS.get(industry_id, [])


# ---------------------------------------------------------------------------
# WEBSITE BUILDER TEMPLATES
# ---------------------------------------------------------------------------

WEBSITE_TEMPLATES: Dict[str, Dict[str, Any]] = {
    "pressure-washing": {
        "theme": "bold-blue",
        "primary_color": "#1E3A8A",
        "accent_color": "#00B4D8",
        "homepage_sections": [
            {"type": "hero", "headline": "From Dull to Dazzling — Professional Pressure Washing", "subheadline": "Driveways, homes, roofs, and commercial properties. We make everything look new again.", "cta": "Get a Free Quote"},
            {"type": "services", "title": "Our Services", "items": ["Driveway & Concrete Washing", "House Washing", "Roof Soft Wash", "Deck & Fence Cleaning", "Commercial Pressure Washing", "Fleet Washing"]},
            {"type": "before_after", "title": "See the Difference"},
            {"type": "testimonials", "title": "What Our Customers Say"},
            {"type": "booking_cta", "headline": "Book Your Cleaning Today", "cta": "Get My Free Quote"},
        ],
        "seo_meta": {
            "title": "{business_name} — Pressure Washing in {city}, {state}",
            "description": "Professional pressure washing in {city}. Driveways, homes, roofs, and decks. Licensed, insured, and satisfaction guaranteed. Call today!",
        },
        "blog_topics": ["How Often Should You Pressure Wash Your Driveway?", "Soft Wash vs. Pressure Wash: What's the Difference?", "How to Prepare Your Home for a Pressure Washing Service", "5 Signs Your Roof Needs a Soft Wash", "Best Time of Year to Pressure Wash in {state}"],
    },
    "hvac": {
        "theme": "clean-gray",
        "primary_color": "#1F2937",
        "accent_color": "#F59E0B",
        "homepage_sections": [
            {"type": "hero", "headline": "Stay Comfortable Year-Round — Expert HVAC Service", "cta": "Schedule Service"},
            {"type": "services", "items": ["AC Installation & Repair", "Heater Installation & Repair", "HVAC Maintenance Plans", "Duct Cleaning", "Emergency Service", "Commercial HVAC"]},
            {"type": "emergency_banner", "headline": "HVAC Emergency? Call Now — 24/7 Service Available"},
            {"type": "testimonials"},
            {"type": "booking_cta", "cta": "Book Service Today"},
        ],
        "seo_meta": {"title": "{business_name} — HVAC Service in {city}", "description": "Expert HVAC installation, repair, and maintenance in {city}. 24/7 emergency service. Call today!"},
        "blog_topics": ["How to Change Your HVAC Filter", "Signs Your AC Needs Repair", "How to Choose the Right HVAC System for Your Home", "Benefits of a Seasonal HVAC Tune-Up", "How Long Should an HVAC System Last?"],
    },
    "attorney-law-firm": {
        "theme": "professional-dark",
        "primary_color": "#1A1A2E",
        "accent_color": "#C9A84C",
        "homepage_sections": [
            {"type": "hero", "headline": "Experienced Legal Representation You Can Trust", "subheadline": "Fighting for your rights, your family, and your future.", "cta": "Schedule a Free Consultation"},
            {"type": "practice_areas", "title": "Practice Areas"},
            {"type": "attorney_bio", "title": "Meet Your Attorney"},
            {"type": "testimonials"},
            {"type": "disclaimer", "text": "This website is for informational purposes only. Contacting us does not establish an attorney-client relationship."},
            {"type": "consultation_cta", "cta": "Schedule Your Free Consultation"},
        ],
        "seo_meta": {"title": "{business_name} — {practice_area} Attorney in {city}", "description": "Experienced {practice_area} attorney in {city}. Free consultations. Protecting your rights and your future. Call today."},
        "blog_topics": ["What to Expect During a Free Legal Consultation", "Understanding Your Rights in {practice_area}", "Common Questions About {practice_area} Cases", "How to Choose the Right Attorney", "Steps to Take After {common_incident}"],
    },
    "dentist-office": {
        "theme": "clean-white",
        "primary_color": "#0EA5E9",
        "accent_color": "#FFFFFF",
        "homepage_sections": [
            {"type": "hero", "headline": "Your Family Dentist in {city} — New Patients Welcome", "cta": "Book an Appointment"},
            {"type": "services", "title": "Dental Services", "items": ["General Dentistry", "Cosmetic Dentistry", "Teeth Whitening", "Orthodontics", "Emergency Dental Care", "Pediatric Dentistry"]},
            {"type": "insurance", "title": "Insurance & Payment", "text": "We accept most major insurance plans. Financing available."},
            {"type": "team", "title": "Meet Our Team"},
            {"type": "testimonials"},
            {"type": "booking_cta", "cta": "Book Your Appointment Online"},
        ],
        "seo_meta": {"title": "{business_name} — Family Dentist in {city}", "description": "Family dental care in {city}. New patients welcome, most insurance accepted. Schedule your appointment today!"},
        "blog_topics": ["How Often Should You Visit the Dentist?", "Tips for Maintaining Good Oral Hygiene at Home", "What Is a Deep Cleaning?", "Teeth Whitening Options: Which Is Right for You?", "How to Handle a Dental Emergency"],
    },
    "funding-business": {
        "theme": "bold-dark-gold",
        "primary_color": "#0A0F1E",
        "accent_color": "#D4A017",
        "homepage_sections": [
            {"type": "hero", "headline": "Get Business Funding Ready — Build Your Approval Profile", "subheadline": "We help entrepreneurs prepare for loans, lines of credit, and business capital.", "cta": "Start My Funding Assessment"},
            {"type": "services", "items": ["Funding Readiness Assessment", "Business Credit Building", "Entity & EIN Setup Guidance", "Business Banking Strategy", "Documentation Preparation", "Lender Matching"]},
            {"type": "disclaimer", "text": "We do not guarantee loan or funding approval. We provide education and preparation support only."},
            {"type": "testimonials"},
            {"type": "cta", "headline": "Ready to Build Your Funding Profile?", "cta": "Start My Assessment"},
        ],
        "seo_meta": {"title": "{business_name} — Business Funding Readiness in {city}", "description": "Get business funding ready with {business_name}. We help entrepreneurs build credit, prepare documentation, and structure their business for lender approval. {city}."},
        "blog_topics": ["What Credit Score Do You Need for a Business Loan?", "How to Build Business Credit from Scratch", "5 Documents Every Business Owner Should Have Before Applying for a Loan", "LLC vs. Sole Proprietor: Which Is Better for Business Funding?", "Understanding SBA Loans: What They Are and How to Qualify"],
    },
    "content-creator": {
        "theme": "vibrant-dark",
        "primary_color": "#18181B",
        "accent_color": "#A855F7",
        "homepage_sections": [
            {"type": "hero", "headline": "Content That Builds Brands & Drives Revenue", "cta": "Get a Free Content Audit"},
            {"type": "services", "items": ["Video Production", "Copywriting", "Social Media Management", "Brand Strategy", "Podcast Production", "Email Marketing"]},
            {"type": "portfolio", "title": "Recent Work"},
            {"type": "testimonials"},
            {"type": "cta", "cta": "Start Your Content Strategy"},
        ],
        "seo_meta": {"title": "{business_name} — Content Creator & Brand Strategist in {city}", "description": "Professional content creation and brand strategy in {city}. Video, copy, social media, and marketing that grows your audience and revenue."},
        "blog_topics": ["How to Build a Content Strategy on a Budget", "Video vs. Written Content: What Works Best for Your Audience?", "How to Repurpose One Piece of Content 10 Different Ways", "Building a Personal Brand on Social Media in 2024", "How to Measure Your Content Marketing ROI"],
    },
}

# Generic template for industries without custom website templates
_GENERIC_WEBSITE_TEMPLATE = {
    "theme": "modern-dark",
    "primary_color": "#0A0F1E",
    "accent_color": "#1E88E5",
    "homepage_sections": [
        {"type": "hero", "headline": "{business_name} — Professional {industry} Services in {city}", "cta": "Contact Us Today"},
        {"type": "services", "title": "Our Services"},
        {"type": "about", "title": "About Us"},
        {"type": "testimonials", "title": "What Clients Say"},
        {"type": "booking_cta", "cta": "Book a Free Consultation"},
    ],
    "seo_meta": {
        "title": "{business_name} — {industry} Services in {city}, {state}",
        "description": "Professional {industry} services in {city}. Experienced, licensed, and dedicated to quality results. Contact us today!",
    },
    "blog_topics": ["Top Tips for {industry}", "How to Choose the Right {industry} Provider", "What to Expect When Working With a {industry} Professional", "Common {industry} Questions Answered", "Why {city} Businesses Trust {business_name}"],
}


def get_website_template(industry_id: str) -> Dict[str, Any]:
    return WEBSITE_TEMPLATES.get(industry_id, _GENERIC_WEBSITE_TEMPLATE)
