"""Strategist: a personalized path to a monthly revenue target (default $10,000).

Everything here is arithmetic on the user's own inputs plus occupation defaults. The defaults are
illustrative starting assumptions that the user must verify in their own market (Step 1 of the plan
is to check real local prices). Nothing here predicts or guarantees results.
"""
from __future__ import annotations

import math
from typing import Any, Dict, List, Optional

# Illustrative defaults. price = typical price per unit in a mid-size U.S. market (verify locally).
# model "per_job": each sale is a one-off job/project. model "recurring": a client pays monthly.
OCCUPATIONS: Dict[str, Dict[str, Any]] = {
    "house-cleaning": dict(label="House / office cleaning", model="recurring", unit="client", price=220, hours=4, margin=55,
        offer="Recurring bi-weekly clean for 2–3 bedroom homes, first clean at 20% off", license="Usually none; confirm city rules. Get general liability and bonding.",
        channels=["Neighborhood groups (Nextdoor, Facebook) with before/after photos", "Realtors and property managers who need turnover cleans", "Google Business Profile with 5 reviews in the first 30 days"],
        proof="Before/after photos and 5 written reviews", upsell="Deep-clean add-on, move-out cleans, inside-fridge/oven add-ons"),
    "pressure-washing": dict(label="Pressure / soft washing", model="per_job", unit="job", price=300, hours=3, margin=65,
        offer="Driveway + walkway wash package with a visible before/after guarantee to re-wash if missed", license="Usually none; confirm local water-discharge rules. Insurance is essential.",
        channels=["Door-to-door in one neighborhood with a half-washed driveway demo", "Realtors, property managers, HOAs", "Google Business Profile and Facebook groups"],
        proof="Before/after photos, Google reviews", upsell="Fence, deck, roof soft-wash, quarterly maintenance plan"),
    "mobile-detailing": dict(label="Mobile car detailing", model="per_job", unit="job", price=200, hours=3, margin=65,
        offer="Full interior + exterior detail at the customer's location, with an add-on menu", license="Usually none; check water/runoff rules. Garage-keepers or general liability insurance.",
        channels=["Office parks and apartment complexes (book 4 cars in one visit)", "Dealerships and rental fleets", "Instagram/Facebook before/after reels"],
        proof="Before/after photos and repeat-booking count", upsell="Monthly maintenance wash, ceramic coating, fleet contracts"),
    "lawn-care": dict(label="Lawn care / landscaping maintenance", model="recurring", unit="client", price=180, hours=5, margin=50,
        offer="Weekly mowing + edging plan priced per property, billed monthly", license="Usually none for mowing; pesticide application needs a license in most states.",
        channels=["Route density: sign up neighbors on the same street", "Property managers and HOAs", "Door hangers on streets with overgrown lawns"],
        proof="Route map with client count and monthly billing total", upsell="Mulch, cleanups, seasonal aeration, bush trimming"),
    "handyman": dict(label="Handyman / home repair", model="per_job", unit="job", price=300, hours=4, margin=70,
        offer="Half-day repair block with a fixed price and a list of covered tasks", license="Varies a lot by state; many cap job size without a contractor license. Check yours first.",
        channels=["Property managers and landlords (steady repeat work)", "Nextdoor and neighborhood groups", "Google Business Profile"],
        proof="Completed-job photos and 5 reviews", upsell="Monthly maintenance retainer for landlords"),
    "junk-hauling": dict(label="Junk removal / hauling", model="per_job", unit="job", price=325, hours=3, margin=50,
        offer="Flat-rate truckload tiers (quarter, half, full) quoted from a photo", license="Disposal permits and dump fees vary. Get liability insurance.",
        channels=["Realtors and estate-sale/cleanout partners", "Facebook Marketplace and Nextdoor", "Property managers"],
        proof="Photo quote to booked-job ratio, reviews", upsell="Estate cleanouts, recurring property-manager contracts"),
    "personal-training": dict(label="Personal training / fitness coaching", model="recurring", unit="client", price=240, hours=10, margin=85,
        offer="12-week training program, 2 sessions a week, with a measurable goal and weekly check-ins", license="Certification is expected (CPT) and liability insurance is advised. Do not give medical advice.",
        channels=["Gym partnerships and local running/sports groups", "Instagram or TikTok showing client process (with permission)", "Referrals from first 5 clients"],
        proof="Client check-in logs and before/after metrics (with permission)", upsell="Nutrition coaching, small-group sessions, online program"),
    "tutoring": dict(label="Tutoring / test prep", model="recurring", unit="client", price=260, hours=5, margin=90,
        offer="Four 60-minute sessions per month with a diagnostic and a progress report", license="None for private tutoring; school-district rules may apply. Background check helps trust.",
        channels=["Parent groups and school communities", "Counselors and teachers who refer", "Local libraries and homeschool co-ops"],
        proof="Pre/post diagnostic scores and parent testimonials", upsell="Small-group classes, test-prep bootcamps"),
    "photography": dict(label="Photography", model="per_job", unit="shoot", price=600, hours=8, margin=70,
        offer="Fixed-price mini-session or small-business headshot package with 24-hour preview", license="None; get a release and liability coverage. Back up files.",
        channels=["Realtors (listing photos)", "Small businesses needing headshots/product photos", "Wedding and event vendors who refer"],
        proof="Portfolio gallery and delivered-gallery count", upsell="Packages, retainers, album sales"),
    "social-media-management": dict(label="Social media management", model="recurring", unit="client", price=1200, hours=20, margin=85,
        offer="Monthly package: 12 posts, 4 short videos, and a one-page report", license="None. Use written contracts and a content approval process.",
        channels=["Local businesses with weak social presence (restaurants, salons, gyms)", "LinkedIn outreach to owners", "Referrals from web designers and accountants"],
        proof="Monthly report with reach and leads, signed retainer agreements", upsell="Ad management, email marketing, content shoots"),
    "bookkeeping": dict(label="Bookkeeping", model="recurring", unit="client", price=450, hours=6, margin=90,
        offer="Monthly bookkeeping close with a one-page profit and loss summary by the 10th", license="Bookkeeping is generally unlicensed, but tax preparation or representation has rules. Check yours.",
        channels=["Accountants and tax preparers who refer overflow", "Small-business Facebook and chamber of commerce groups", "Contractors and ecommerce sellers"],
        proof="Monthly deliverables and client retention", upsell="Payroll, sales-tax filings, CFO-style reporting"),
    "web-design": dict(label="Web design / development", model="per_job", unit="project", price=2500, hours=25, margin=85,
        offer="Five-page small-business site delivered in 14 days at a fixed price with a care plan", license="None. Use contracts with milestones and a deposit.",
        channels=["Local businesses with no site or an outdated one (use a free audit as the opener)", "Google Business Profile owners", "Referrals from photographers and marketers"],
        proof="Live sites in your portfolio and client testimonials", upsell="Monthly care plan, SEO, copywriting"),
    "copywriting": dict(label="Copywriting / freelance writing", model="per_job", unit="project", price=800, hours=8, margin=90,
        offer="Fixed-price landing page or email sequence with one round of revisions", license="None. Contracts and deposits protect you.",
        channels=["Agencies and consultants who need overflow", "LinkedIn outreach to founders", "Niche job boards and communities"],
        proof="Published samples and measurable client outcomes (with permission)", upsell="Retainers, case studies, email management"),
    "video-editing": dict(label="Video editing", model="recurring", unit="client", price=1500, hours=20, margin=85,
        offer="Monthly package of 8 edited short-form videos from the client's raw footage", license="None. Use contracts and clear revision limits.",
        channels=["Creators and coaches who post weekly", "Podcasters needing clips", "Agencies who subcontract"],
        proof="Delivered video count and client retention", upsell="Thumbnails, captions, channel management"),
    "mobile-notary": dict(label="Mobile notary / loan signing", model="per_job", unit="signing", price=150, hours=2, margin=80,
        offer="Same-day mobile notarization with a flat travel fee", license="State commission required; loan-signing agents often need extra certification and E&O insurance.",
        channels=["Title and escrow companies, signing services", "Law offices and senior-living facilities", "Google Business Profile"],
        proof="Completed signings count and repeat title-company clients", upsell="After-hours fees, apostille help, recurring law-office accounts"),
    "meal-prep": dict(label="Meal prep / catering", model="recurring", unit="client", price=480, hours=16, margin=45,
        offer="Weekly meal-prep subscription with a fixed menu and pickup or delivery", license="Food business rules apply: cottage-food law or a licensed kitchen, health permit, and insurance.",
        channels=["Gyms and fitness coaches", "Office managers for team lunches", "Neighborhood groups with sample boxes"],
        proof="Weekly order count and subscriber retention", upsell="Corporate lunches, party trays, holiday boxes"),
    "mobile-mechanic": dict(label="Mobile mechanic", model="per_job", unit="job", price=320, hours=3, margin=60,
        offer="At-home brake, battery, and maintenance jobs with upfront pricing", license="Varies by state; confirm repair-shop registration and insurance.",
        channels=["Fleet owners and ride-share drivers", "Apartment complexes", "Facebook groups and Google Business Profile"],
        proof="Completed-job photos and reviews", upsell="Fleet maintenance contracts, pre-purchase inspections"),
    "licensed-trades": dict(label="Licensed trades (HVAC, plumbing, electrical)", model="per_job", unit="job", price=450, hours=3, margin=55,
        offer="Diagnostic-plus-repair visit with upfront flat-rate pricing and a maintenance plan option", license="A state or local license is required. Do not operate without it. Insurance and bonding are essential.",
        channels=["Google Business Profile and local search (highest intent)", "Property managers and builders", "Maintenance-plan renewals"],
        proof="Completed work orders and reviews", upsell="Annual maintenance plans, replacements, commercial accounts"),
    "consulting-coaching": dict(label="Consulting / coaching", model="recurring", unit="client", price=1000, hours=10, margin=90,
        offer="Monthly advisory retainer with a defined deliverable and a 90-day outcome plan", license="None generally; avoid guaranteed-results claims and regulated advice (legal, medical, financial) without credentials.",
        channels=["Warm network and former employers", "LinkedIn content plus direct outreach", "Referrals from complementary professionals"],
        proof="Documented client outcomes and signed retainers", upsell="Workshops, group programs, done-for-you services"),
    "event-dj": dict(label="DJ / event services", model="per_job", unit="event", price=900, hours=6, margin=70,
        offer="Four-hour event package with sound, lighting, and a planning call", license="Business license; liability insurance is commonly required by venues.",
        channels=["Venues and wedding planners (preferred vendor lists)", "Corporate event coordinators", "Instagram/TikTok event clips"],
        proof="Booked-event calendar and venue referrals", upsell="Photo booth, lighting upgrades, corporate packages"),
    "remodeling": dict(label="Remodeling / general contracting", model="per_job", unit="project", price=8000, hours=60, margin=25,
        offer="Fixed-scope kitchen or bath refresh with a written scope, schedule, and milestone payments", license="A contractor license is usually required above small project limits. Do not work without it.",
        channels=["Realtors and property investors", "Referrals and Google Business Profile", "Design partners and suppliers"],
        proof="Completed-project portfolio and permits passed", upsell="Maintenance, additional rooms, investor accounts"),
    "pet-care": dict(label="Pet sitting / dog walking", model="recurring", unit="client", price=260, hours=9, margin=85,
        offer="Weekly dog-walking plan with GPS-tracked walks and a photo after each visit", license="Check city rules; pet-care insurance and bonding are strongly advised.",
        channels=["Apartment buildings and vet offices", "Neighborhood groups and pet stores", "Referrals from first clients"],
        proof="Client count, walk logs, and reviews", upsell="Boarding, extra visits, holiday premiums"),
    "window-cleaning": dict(label="Window cleaning", model="per_job", unit="job", price=220, hours=2.5, margin=70,
        offer="Exterior window clean for storefronts or homes on a recurring schedule", license="Usually none; insurance and ladder/height safety matter.",
        channels=["Storefront strips (one visit, ten shops)", "Property managers", "Door-to-door with a free sample window"],
        proof="Route schedule and repeat clients", upsell="Quarterly contracts, gutter cleaning, pressure washing"),
    "custom": dict(label="Other / my own business", model="per_job", unit="sale", price=None, hours=None, margin=60,
        offer="One clear offer with a fixed price that solves one specific problem", license="Check your state and city for licenses, permits, and insurance before your first sale.",
        channels=["People who already pay for something similar (ask where they found it)", "Direct outreach to a list of 50 named prospects", "Referrals and partnerships with businesses serving the same customer"],
        proof="Invoices, bank deposits, and written testimonials", upsell="A premium tier and a recurring option"),
}

WORKING_DAYS = 20
WEEKS_PER_MONTH = 4.33
REPLY_RATE = 0.12          # share of outreach that turns into a real conversation (starting assumption)
REFERRAL_SHARE = 0.25     # share of sales assumed to come from referrals and repeat customers once the business is running
OVERHEAD = 1.25            # extra time for admin, quotes, and selling on top of delivery hours
RAMP = [0.0, 0.10, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1.0]  # share of target run-rate by week


def occupation_choices() -> List[Dict[str, Any]]:
    return [
        {"key": k, "label": v["label"], "model": v["model"], "unit": v["unit"], "price": v["price"], "hours": v["hours"], "margin": v["margin"]}
        for k, v in OCCUPATIONS.items()
    ]


def _clamp(value: Optional[float], lo: float, hi: float, default: float) -> float:
    if value is None:
        return default
    return max(lo, min(hi, float(value)))


def build_plan(
    occupation: str,
    custom_label: str = "",
    target: float = 10000,
    price: Optional[float] = None,
    hours_per_unit: Optional[float] = None,
    hours_per_week: Optional[float] = None,
    close_rate: Optional[float] = None,
    margin: Optional[float] = None,
    existing_clients: int = 0,
    model: Optional[str] = None,
) -> Dict[str, Any]:
    occ = OCCUPATIONS.get(occupation) or OCCUPATIONS["custom"]
    label = custom_label.strip() or occ["label"] if occupation == "custom" else occ["label"]
    target = _clamp(target, 1000, 100000, 10000)
    price = _clamp(price, 5, 100000, occ["price"] or 250)
    hours_per_unit = _clamp(hours_per_unit, 0.25, 200, occ["hours"] or 3)
    hours_per_week = _clamp(hours_per_week, 5, 80, 30)
    close = _clamp(close_rate, 3, 80, 20) / 100.0
    margin_pct = _clamp(margin, 5, 95, occ["margin"])
    existing = int(_clamp(existing_clients, 0, 500, 0))
    model = model if model in {"per_job", "recurring"} else occ["model"]
    unit = occ["unit"]

    # ── Core math ────────────────────────────────────────────────────────────
    units = math.ceil(target / price)                         # jobs per month, or active clients
    hours_needed = units * hours_per_unit * OVERHEAD
    hours_available = hours_per_week * WEEKS_PER_MONTH
    new_units_needed = max(0, units - existing) if model == "recurring" else units
    # Per-job businesses must close the full monthly volume each month; recurring ones build the base once.
    sales_to_close_monthly = math.ceil(new_units_needed / 3) if model == "recurring" else units
    conversations = math.ceil(sales_to_close_monthly * (1 - REFERRAL_SHARE) / close)
    outreach = math.ceil(conversations / REPLY_RATE)
    outreach_per_day = math.ceil(outreach / WORKING_DAYS)
    profit = round(target * margin_pct / 100)
    tax_set_aside = round(profit * 0.28)

    capacity_units = max(1, math.floor(hours_available / (hours_per_unit * OVERHEAD)))
    capacity_revenue = capacity_units * price
    required_price = math.ceil(target / capacity_units)
    over_capacity = hours_needed > hours_available

    flags: List[Dict[str, str]] = []
    if over_capacity:
        flags.append({
            "level": "high", "title": "You cannot deliver this volume alone at this price",
            "detail": f"Hitting ${target:,.0f} at ${price:,.0f} per {unit} needs about {hours_needed:,.0f} hours a month including admin, and you have about {hours_available:,.0f}. "
                      f"At your hours, you can serve roughly {capacity_units} {unit}s (about ${capacity_revenue:,.0f}/month). "
                      f"To reach the target alone, price at about ${required_price:,.0f} per {unit}, narrow to a higher-value offer, or add a helper or subcontractor.",
        })
    if margin_pct < 35:
        flags.append({"level": "medium", "title": "Thin margin",
                      "detail": f"At {margin_pct:.0f}% margin, ${target:,.0f} of revenue is roughly ${profit:,.0f} before taxes. Track costs weekly and raise prices before adding volume."})
    if units > 60 and model == "per_job":
        flags.append({"level": "medium", "title": "High transaction volume",
                      "detail": f"{units} {unit}s a month is heavy. Consider bundling into packages or recurring plans to get the same revenue with fewer, larger sales."})
    flags.append({"level": "info", "title": "License and insurance check", "detail": occ["license"]})

    scenarios = []
    for tag, mult in (("Lower price (-20%)", 0.8), ("Your price", 1.0), ("Higher price (+20%)", 1.2)):
        p = price * mult
        u = math.ceil(target / p)
        scenarios.append({"name": tag, "price": round(p), "units": u,
                          "hours": round(u * hours_per_unit * OVERHEAD), "fits_your_hours": u * hours_per_unit * OVERHEAD <= hours_available})

    # ── 12-week schedule ──────────────────────────────────────────────────────
    weeks = _weeks(occ, label, unit, model, price, target, units, existing, close, outreach_per_day, hours_per_unit)

    diagnostics = [
        {"metric": "Reply rate on outreach", "check": "After 50 messages or calls", "if_below": "10%",
         "then": "Fix the message, not the volume: lead with their problem and one specific result, shorten to 3 sentences, and add a clear question at the end."},
        {"metric": "Conversation to sale", "check": "After 10 conversations", "if_below": f"{round(close * 100 * 0.6)}%",
         "then": "Your offer, price framing, or follow-up is off. Re-listen to objections, offer a smaller starter package, and follow up at day 1, 3, 7, and 14."},
        {"metric": "Revenue vs weekly target", "check": "Every Friday", "if_below": "70% of target for 2 weeks in a row",
         "then": "Cut the lowest-performing channel, double the best one, and book 5 customer conversations to learn why people say no."},
        {"metric": "Hours worked vs hours available", "check": "Every Friday", "if_below": "n/a (watch for over 90%)",
         "then": "You are at capacity. Raise prices 10-20% for new customers, drop low-margin work, or add help before taking more."},
        {"metric": "Profit margin", "check": "Monthly", "if_below": f"{max(5, round(margin_pct - 10))}%",
         "then": "Review costs line by line, raise prices, and stop discounting."},
    ]

    verification = [
        {"milestone": "Market price verified", "proof": "A sheet with 5 competitor prices and links or call notes", "by": "Week 1"},
        {"milestone": "Ready to be paid", "proof": "A payment link you tested with a real $1 payment, and a business bank account", "by": "Week 1"},
        {"milestone": "First sale", "proof": "A paid invoice and the matching bank deposit", "by": "Week 2-3"},
        {"milestone": "First 3 customers", "proof": "3 paid invoices and 3 written testimonials or reviews", "by": "Week 4"},
        {"milestone": f"{round(RAMP[5] * 100)}% of target run-rate", "proof": f"Bank deposits totaling about ${round(target * RAMP[5] / WEEKS_PER_MONTH * 4):,.0f} over the last 4 weeks", "by": "Week 6"},
        {"milestone": f"{round(RAMP[8] * 100)}% of target run-rate", "proof": "Four-week deposit total from your bank statement, not estimates", "by": "Week 9"},
        {"milestone": "Target run-rate", "proof": f"A calendar month with ${target:,.0f} in revenue shown on the bank statement, and a profit-and-loss that shows what you kept", "by": "Week 12 or later"},
    ]

    assumptions = [
        f"Price of ${price:,.0f} per {unit} is a starting figure. Replace it with what your local market actually pays after Week 1's price check.",
        f"About {round(REFERRAL_SHARE * 100)}% of sales are assumed to come from referrals and repeat customers, so outreach covers the rest.",
        f"{round(close * 100)}% of conversations become sales, and {round(REPLY_RATE * 100)}% of outreach becomes a conversation. Replace both with your measured numbers after Week 2.",
        f"Each {unit} takes {hours_per_unit:g} hours, plus {round((OVERHEAD - 1) * 100)}% for admin and selling.",
        f"Margin of {margin_pct:.0f}% is before income taxes. Many owners set aside about 25-30% of profit for taxes. Confirm with a tax professional.",
        "The weekly ramp is a target pace, not a prediction. Many businesses take longer. Use the diagnostics to adjust.",
    ]

    return {
        "occupation": occupation if occupation in OCCUPATIONS else "custom",
        "label": label,
        "model": model,
        "unit": unit,
        "inputs": {"target": target, "price": price, "hours_per_unit": hours_per_unit, "hours_per_week": hours_per_week,
                   "close_rate": round(close * 100), "margin": margin_pct, "existing_clients": existing},
        "math": {
            "units_needed": units, "hours_needed": round(hours_needed), "hours_available": round(hours_available),
            "conversations_per_month": conversations, "outreach_per_month": outreach, "outreach_per_day": outreach_per_day,
            "estimated_profit": profit, "tax_set_aside": tax_set_aside, "capacity_units": capacity_units,
            "capacity_revenue": capacity_revenue, "required_price_alone": required_price, "over_capacity": over_capacity,
            "sales_to_close_monthly": sales_to_close_monthly,
        },
        "first_offer": occ["offer"],
        "channels": occ["channels"],
        "proof_to_collect": occ["proof"],
        "upsell": occ["upsell"],
        "flags": flags,
        "scenarios": scenarios,
        "weeks": weeks,
        "diagnostics": diagnostics,
        "verification": verification,
        "assumptions": assumptions,
        "disclaimer": (
            "This is a planning tool, not a promise. It shows the revenue math and a target pace for the numbers you entered. "
            "PEN2PRO does not guarantee income, business success, credit repair results, or funding approval. "
            "Prices, licenses, and taxes vary by location and industry. Confirm legal and tax decisions with a qualified professional."
        ),
    }


def _weeks(occ, label, unit, model, price, target, units, existing, close, outreach_per_day, hours_per_unit) -> List[Dict[str, Any]]:
    weekly_outreach_full = outreach_per_day * 5
    out: List[Dict[str, Any]] = []
    for i, share in enumerate(RAMP, start=1):
        run_rate = target * share
        if model == "recurring":
            active_target = max(existing, math.ceil(run_rate / price)) if share else existing
            sales_target = max(0, active_target - (out[-1]["targets"]["active_clients"] if out else existing))
            revenue_target = round(active_target * price)
            targets = {"active_clients": active_target, "new_sales": sales_target, "monthly_run_rate": revenue_target}
        else:
            week_rev = run_rate / WEEKS_PER_MONTH
            sales_target = math.ceil(week_rev / price) if share else 0
            targets = {"new_sales": sales_target, "week_revenue": round(sales_target * price), "monthly_run_rate": round(run_rate)}
        ramp_out = 0 if i == 1 else round(weekly_outreach_full * (0.5 if i == 2 else 0.75 if i == 3 else 1.0))
        targets["outreach_messages"] = ramp_out
        targets["conversations"] = round(ramp_out * REPLY_RATE)
        out.append({"week": i, "targets": targets, **_week_content(i, occ, label, unit, model, price, ramp_out)})
    return out


def _week_content(i: int, occ, label, unit, model, price, outreach) -> Dict[str, Any]:
    ch = occ["channels"]
    content = {
        1: dict(focus="Prove the price and be ready to get paid",
                actions=[f"Call or message 5 competitors or similar providers and record what they charge for {occ['offer'].split(',')[0].lower()}. Record the price, what is included, and how fast they respond.",
                         f"Write your first offer: {occ['offer']}. Set the price after comparing: do not undercut the middle of your market.",
                         "Open a business bank account, create a payment link, and run a real $1 test payment to yourself.",
                         "Build a list of 50 named prospects in a spreadsheet: name, how to reach them, why they need this, and a follow-up date.",
                         "Check licensing and insurance requirements in your state and city before your first sale."],
                proof=["Competitor price sheet", "Test payment receipt", "Prospect list with 50 rows"],
                if_behind="Do not start outreach until the price check and payment link are done. Selling without a price you can defend wastes your best leads."),
        2: dict(focus="Start outreach and get your first yes",
                actions=[f"Send {outreach} personalized messages or calls this week, split across your top channels: {ch[0]}; {ch[1]}.",
                         "Use a 3-sentence opener: who you help, the specific result, and one question. Never send a generic message.",
                         "Offer a small, low-risk starter package to your first customers and ask for a written review in return.",
                         "Log every contact in your spreadsheet. Follow up at day 1, 3, 7, and 14."],
                proof=["Contact log with dates and replies", "First paid invoice if you close"],
                if_behind="If you sent the messages and got no replies, fix the opener before sending more. If you have replies but no sales, call them instead of messaging."),
        3: dict(focus="Increase volume and collect proof",
                actions=[f"Send {outreach} messages or calls. Add a second channel: {ch[2]}.",
                         f"Deliver your first jobs well. Capture proof: {occ['proof'].lower()}.",
                         "Ask every happy customer for a review within 24 hours and for two referrals by name.",
                         "Review the numbers: replies per 10 messages and sales per 10 conversations."],
                proof=["Photos or work samples", "First reviews", "Updated funnel numbers"],
                if_behind="Look at the funnel. Low replies means message problem. Low closes means offer or price problem. Fix one thing this week."),
        4: dict(focus="Lock in repeatable results",
                actions=[f"Keep outreach at {outreach} a week. Block 90 minutes every day for selling before delivery work.",
                         "Collect 3 written testimonials and put them on your site or Google Business Profile.",
                         "Raise your price 10% for new customers if you closed your last 3 quotes without pushback.",
                         "Set up a weekly numbers sheet: revenue, costs, new leads, close rate, hours."],
                proof=["3 testimonials", "Weekly numbers sheet filled in"],
                if_behind="If revenue is under 70% of target for two weeks, cut the weakest channel and double the best one."),
        5: dict(focus="Build a referral loop",
                actions=[f"Keep outreach at {outreach} a week.", "Offer a thank-you credit for referrals and tell every customer about it.",
                         "Partner with 3 businesses that serve the same customer without competing and offer a referral fee."],
                proof=["Referral sources log", "Partner conversations noted"],
                if_behind="Ask every customer who else they know who needs this. Referrals are your cheapest channel."),
        6: dict(focus="Check the numbers against your target pace",
                actions=["Compare your last four weeks of bank deposits to the Week 6 target.", f"Keep outreach at {outreach} a week.",
                         "If you are hitting 70% or more of target pace, keep going. If not, run the diagnostics table and change one thing.",
                         "Review costs. If margin is below your plan, raise prices or cut the lowest-margin work."],
                proof=["Four-week bank deposit total", "Updated profit and loss"],
                if_behind="Book 5 customer calls asking why they bought or did not. Their answers are your next fix."),
        7: dict(focus="Add a second revenue lever",
                actions=[f"Introduce your upsell: {occ['upsell']}.", f"Keep outreach at {outreach} a week.",
                         "Package your best-selling work into a clear tiered menu: Starter, Core, Premium."],
                proof=["Tiered price menu", "First upsell sale"],
                if_behind="Offer the upsell to every past customer. Warm customers close at the highest rate."),
        8: dict(focus="Turn customers into predictable revenue",
                actions=["Offer a recurring option to every customer if your model allows it." if model == "per_job" else "Offer annual or quarterly prepay discounts to improve cash flow and retention.",
                         f"Keep outreach at {outreach} a week.", "Ask your top 3 customers for case-study quotes with their permission."],
                proof=["Recurring/prepay customers count", "Case study quotes"],
                if_behind="Retention is cheaper than acquisition. Call every customer from the last 60 days."),
        9: dict(focus="Strengthen the business, not just the sales",
                actions=["Check your structure, insurance, and taxes. Make estimated tax payments if you owe them.",
                         "Write down your process for delivering the job so someone else could follow it.",
                         f"Keep outreach at {outreach} a week."],
                proof=["Written process", "Tax set-aside balance"],
                if_behind="If you cannot deliver more without losing quality, raise prices or add help before adding volume."),
        10: dict(focus="Create capacity",
                 actions=["Decide what to hand off first: admin, scheduling, or lower-value work. Test one helper or subcontractor on one task.",
                          f"Keep outreach at {outreach} a week.", "Raise prices again for new customers if demand exceeds your hours."],
                 proof=["One delegated task completed", "Updated price list"],
                 if_behind="If you are over 90% of your available hours, stop discounting and stop taking low-margin work."),
        11: dict(focus="Prepare for funding and growth",
                 actions=["Organize a funding folder: bank statements, profit and loss, tax filings, formation documents, and a one-page use-of-funds plan.",
                          "Open starter vendor accounts that report to business credit bureaus and pay them on time.",
                          f"Keep outreach at {outreach} a week."],
                 proof=["Funding folder", "Vendor accounts opened"],
                 if_behind="Do not borrow to cover losses. Borrow only for something that clearly increases revenue."),
        12: dict(focus="Review and set the next 90 days",
                 actions=["Compare actual revenue and profit to your Week 12 target using bank statements.",
                          "Keep what worked, drop what did not, and set your next 90-day target.",
                          f"Keep outreach at {outreach} a week."],
                 proof=["Bank statement for the month", "Profit and loss", "Next 90-day plan"],
                 if_behind="Being behind is data, not failure. Use the diagnostics to find the constraint and run another 12 weeks with it fixed."),
    }[i]
    return content
