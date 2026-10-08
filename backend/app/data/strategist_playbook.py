"""PEN2PRO $100 Strategist Plan — step-by-step playbook for starting a business.

Costs are illustrative and vary by state and industry. This is education and
organization, not legal, tax, or financial advice.
"""

PLAN = {
    "id": "strategist",
    "name": "PEN2PRO $100 Strategist Plan",
    "price": 100,
    "display_price": "$100 one-time",
    "tagline": "A step-by-step plan for starting your business, from idea to your first paying customers.",
    "duration": "90 days",
}

PHASES = [
    {"id": "foundation", "name": "Phase 1 · Foundation", "days": "Days 1–3"},
    {"id": "validate", "name": "Phase 2 · Validate", "days": "Days 4–10"},
    {"id": "setup", "name": "Phase 3 · Legal & Money Setup", "days": "Days 8–14"},
    {"id": "launch", "name": "Phase 4 · Launch", "days": "Days 15–30"},
    {"id": "grow", "name": "Phase 5 · Grow & Fund", "days": "Days 31–90"},
]

STEPS = [
    {
        "id": 1,
        "phase": "foundation",
        "title": "Pick the business you will actually start",
        "goal": "Choose one business idea that fits your skills, your time, and a buyer who already pays for it.",
        "time": "2–3 hours",
        "cost": "$0",
        "actions": [
            "List 10 things people have paid you for, asked you for help with, or that you did well in jobs, the military, hobbies, or life. Lived experience counts.",
            "Circle the 3 that solve an expensive, annoying, or urgent problem for someone (cleaning, repairs, paperwork help, content, tutoring, delivery, food, fitness, design, bookkeeping, etc.).",
            "Score each of the 3 from 1–5 on: (a) I can start this week, (b) buyers already pay for it, (c) startup cost under $500, (d) I can reach buyers without paid ads, (e) I would not hate doing it for 12 months.",
            "Pick the highest total. If it is a tie, pick the one where you can name 5 specific people or businesses who would buy.",
            "Write one sentence: \"I help [who] get [result] by [what I do].\" Save it. You will reuse it on every page you build.",
        ],
        "deliverable": "One chosen idea and your one-sentence business statement.",
        "avoid": [
            "Picking an idea because it sounds impressive instead of because someone will pay for it this month.",
            "Starting three businesses at once. One offer, one customer type, one city or niche for the first 90 days.",
        ],
        "checkpoint": "You can say your business in one sentence and name 5 possible buyers.",
    },
    {
        "id": 2,
        "phase": "foundation",
        "title": "Define your customer and their problem",
        "goal": "Know exactly who you serve and what they will pay to fix.",
        "time": "1 day",
        "cost": "$0",
        "actions": [
            "Describe your ideal customer in one paragraph: who they are, where they are (city or online), what they already spend money on, and what they are frustrated with right now.",
            "Write the problem in their words, not yours. Example: \"I have no time to clean my rental between guests\" beats \"property turnover services\".",
            "Have 10 short conversations (15 minutes each) with people who match your customer. Ask: What is the hardest part of this? What have you tried? What did it cost you? What would a perfect fix look like?",
            "Record the exact phrases they repeat. Those phrases become your headline, your ad copy, and your sales script.",
            "Rank the problems you heard by pain and frequency. Build around the top one, not all of them.",
        ],
        "deliverable": "A one-page customer profile with the top problem and 5–10 real phrases from buyers.",
        "avoid": [
            "Asking friends and family \"Is my idea good?\" They will say yes. Ask strangers who match the buyer what they have paid for before.",
            "Describing your customer as \"everyone\". Everyone is not reachable.",
        ],
        "checkpoint": "10 conversations completed, and at least 3 people described the same problem unprompted.",
    },
    {
        "id": 3,
        "phase": "validate",
        "title": "Build your first offer and set your price",
        "goal": "Turn your skill into a clear, priced package a stranger can say yes to.",
        "time": "1 day",
        "cost": "$0",
        "actions": [
            "Create 3 packages: Starter (small, low-risk first purchase), Core (the offer you want most people to buy), and Premium (more service, faster, or recurring).",
            "Describe each package by outcome, not hours: what the customer gets, by when, and what is not included.",
            "Price with math, not guessing: add your direct costs (supplies, fees, travel), add the hourly rate you need to earn, add 20–30% for taxes, tools, and slow weeks. That is your floor. Compare to what competitors charge and price at or slightly above the middle if your offer is clearer.",
            "Make Core the obvious choice by pricing Starter at roughly half and Premium at roughly double.",
            "Write a plain-language promise: what you do, how fast, and what happens if something goes wrong (redo, partial refund, or reschedule). Never promise results you cannot control.",
            "Add one simple recurring option (monthly maintenance, retainer, subscription, or membership) if your business allows it. Recurring revenue is what makes a business stable.",
        ],
        "deliverable": "A one-page offer sheet with 3 priced packages and your service promise.",
        "avoid": [
            "Underpricing to get customers. Low prices attract the worst customers and are hard to raise later.",
            "Charging by the hour when the customer only cares about the result.",
        ],
        "checkpoint": "A stranger could read your offer sheet and know exactly what to buy and what it costs.",
    },
    {
        "id": 4,
        "phase": "validate",
        "title": "Validate demand before you spend money",
        "goal": "Get real people to say yes, or put down a deposit, before you buy equipment, pay for ads, or file anything expensive.",
        "time": "5–7 days",
        "cost": "$0–$20",
        "actions": [
            "Build a list of 50 specific prospects (names, businesses, or neighborhoods) from Google Maps, Facebook groups, Nextdoor, LinkedIn, local directories, and your own contacts.",
            "Message or call 10–20 of them per day for 5 days. Use the script in the Scripts section. Goal: book conversations, not hard sales.",
            "In every conversation, present your Core package and ask for a decision: \"Would you like to start this week?\"",
            "Track every contact in a simple sheet: name, date, channel, response, next step, follow-up date.",
            "Success rule: 3 paid jobs, 3 deposits, or 5 written commitments. If you hit it, move on. If not, change the offer or the customer and test again for a week. Do not buy anything yet.",
            "Take payment the simple way for now: Cash App Business, Venmo Business, Zelle, Square, or a Stripe payment link. Keep every payment record.",
        ],
        "deliverable": "A prospect tracking sheet and at least 3 paying or committed customers.",
        "avoid": [
            "Spending on a logo, website, business cards, or inventory before anyone has agreed to pay.",
            "Counting compliments as validation. Money or a written commitment is validation.",
        ],
        "checkpoint": "3 people have paid or committed. You know which message and package got the yes.",
    },
    {
        "id": 5,
        "phase": "setup",
        "title": "Choose your legal structure",
        "goal": "Pick the structure that protects you and fits where your business is today.",
        "time": "2–3 hours",
        "cost": "$0–$500 depending on your state",
        "actions": [
            "Understand the two common starting points. Sole proprietorship: no filing needed in most states, you and the business are legally the same, fastest and cheapest. LLC: a separate legal entity that can limit personal liability for business debts, costs a state filing fee, and usually has annual fees or reports.",
            "Check your state's Secretary of State website for the LLC filing fee and annual report cost. Fees vary widely, from about $35 to $500 for formation, and some states charge annual or franchise fees.",
            "Decide: if your work carries injury, property damage, or contract risk, or you are about to sign leases, hire people, or take larger clients, form the LLC now. If you are still validating, you can operate as a sole proprietor and form the LLC once you have steady revenue.",
            "If forming an LLC: file Articles of Organization with your state (online is usually fastest), choose a registered agent (you can be your own if you have a physical address in the state), and write a simple operating agreement, even for a single-member LLC.",
            "Keep your formation documents in a folder called Business Foundation. Banks, lenders, and vendors will ask for them.",
            "For anything unusual, such as licensed professions, partners, or investors, book a one-time consult with a small-business attorney or your state's Small Business Development Center (SBDC), which is often free.",
        ],
        "deliverable": "A decision on your structure and, if forming an LLC, a filed and approved entity.",
        "avoid": [
            "Paying a formation service hundreds of dollars for something you can file yourself on your state's website.",
            "Assuming an LLC protects you if you mix personal and business money. Keep them separate.",
        ],
        "checkpoint": "You know your structure and can show a state record or have a clear date to file.",
    },
    {
        "id": 6,
        "phase": "setup",
        "title": "Register your name, get your EIN, and claim your handles",
        "goal": "Lock your business identity so everything you build is under one name.",
        "time": "2–4 hours",
        "cost": "$0–$30",
        "actions": [
            "Search your state's business name database to confirm your name is available, then search the USPTO trademark database (tmsearch.uspto.gov) for conflicts in your category.",
            "If operating as a sole proprietor under a name other than your own, file a DBA (assumed name) with your county or state. Fees vary by location.",
            "Get your free EIN from the IRS at irs.gov (search \"Apply for an EIN online\"). It takes about 10 minutes and the IRS never charges for it. Sites that charge a fee for an EIN are not the IRS. Save the confirmation letter (CP 575 or the confirmation PDF).",
            "Buy your domain for about $10–$15 per year from a registrar like Namecheap or Cloudflare. Prefer .com and a name that is easy to say and spell.",
            "Claim the same handle on Instagram, Facebook, TikTok, YouTube, and LinkedIn even if you will not use them all yet.",
            "Set up a business email (you@yourbusiness.com) using Google Workspace or similar, so you look established in every message.",
        ],
        "deliverable": "Confirmed name, EIN confirmation letter, domain, and matching social handles.",
        "avoid": [
            "Paying a third-party website for an \"EIN service\". The IRS does it free.",
            "Buying a name before checking trademarks. Rebranding later is expensive.",
        ],
        "checkpoint": "Name, EIN, domain, and handles all match.",
    },
    {
        "id": 7,
        "phase": "setup",
        "title": "Separate your money: business bank account and bookkeeping",
        "goal": "Create clean financial records from day one. This is what protects you with taxes and unlocks credit and funding later.",
        "time": "half a day",
        "cost": "$0–$15 per month",
        "actions": [
            "Open a business checking account. Bring your EIN letter, formation documents or DBA, government ID, and your operating agreement if you have an LLC. Online banks (Mercury, Relay) and community banks or credit unions are all options. Compare monthly fees, cash deposit options, and whether they will work with a new business.",
            "Run every dollar of business income and expense through that account. Never pay business costs from your personal account.",
            "Set up bookkeeping on day one. Wave is free; QuickBooks and FreshBooks are paid options. Connect your bank so transactions import automatically.",
            "Create a simple category list: Income, Supplies, Software, Marketing, Fees, Vehicle, Insurance, Taxes, Owner Draw.",
            "Open a second savings account named Taxes. Move a fixed percentage of every payment into it. Many new owners set aside 25–30% of profit, but confirm the right number with a tax professional because it depends on your income and state.",
            "Pay yourself with a scheduled owner draw instead of random transfers, and keep the amount modest while the business grows.",
        ],
        "deliverable": "A funded business checking account, a Taxes savings account, and connected bookkeeping.",
        "avoid": [
            "Commingling funds. It weakens legal protection and makes taxes and lending much harder.",
            "Waiting until tax time to \"catch up\" the books.",
        ],
        "checkpoint": "Every payment from your first customers is in the business account and categorized.",
    },
    {
        "id": 8,
        "phase": "setup",
        "title": "Licenses, permits, insurance, and taxes",
        "goal": "Operate legally and protect yourself from the risks that end small businesses.",
        "time": "1 day",
        "cost": "$0–$200 to start, varies widely",
        "actions": [
            "Check your city and county for a general business license or tax registration. Search \"[your city] business license\".",
            "Check whether your industry needs a state license (contractors, cosmetology, food, childcare, security, transportation, and many others do). Your state licensing board website lists requirements.",
            "If you sell taxable goods or services, register for a sales tax permit with your state's department of revenue before your first taxable sale.",
            "Get a quote for general liability insurance. Many small service businesses can get it for roughly $30–$100 per month. Ask clients or landlords if they require a certificate of insurance. Add commercial auto if you drive for the business.",
            "Understand taxes before they surprise you. As a self-employed owner you generally owe income tax plus self-employment tax (15.3% on net earnings), and the IRS expects quarterly estimated payments (Form 1040-ES) if you will owe over a threshold. Mark the quarterly dates in your calendar.",
            "Keep a mileage log and save receipts for every business expense. Take photos of paper receipts the day you get them.",
            "Schedule a one-hour session with a CPA or enrolled agent in your first quarter to confirm deductions and estimated tax amounts.",
        ],
        "deliverable": "A compliance checklist with each license, permit, and insurance policy marked done or scheduled.",
        "avoid": [
            "Skipping insurance because nothing has gone wrong yet. One property damage or injury claim can end a new business.",
            "Treating a permit as optional. Fines and shutdowns cost more than the license.",
        ],
        "checkpoint": "You can answer: am I licensed, insured, and registered for the taxes that apply to me?",
    },
    {
        "id": 9,
        "phase": "launch",
        "title": "Set up your storefront in one weekend",
        "goal": "Look credible and make it easy to buy. Simple beats fancy.",
        "time": "1–2 days",
        "cost": "$0–$50",
        "actions": [
            "Create a free Google Business Profile (business.google.com). Add your service area, categories, hours, photos, and your offer list. This is often the #1 source of local customers.",
            "Build a one-page website using your domain. Sections: headline using your customer's words, 3 packages with prices, a short About section (use your real story), proof/testimonials, one clear button (Book / Call / Get a Quote), and contact info.",
            "Add a payment and booking link: Stripe Payment Links, Square, or Calendly with payment collection. The fewer steps between interest and payment, the more sales you keep.",
            "Write a one-page service agreement covering scope, price, payment terms, cancellation, and liability. Have an attorney or SBDC review a template once, then reuse it.",
            "Create a simple invoice template and a welcome message you send to every new customer.",
            "Take 10 clear photos or short videos of your work, tools, or process. Real beats stock.",
        ],
        "deliverable": "A live Google Business Profile, a one-page website, a payment link, and a service agreement.",
        "avoid": [
            "Spending weeks polishing a website before you have sales calls booked.",
            "Hiding your prices. Clear pricing filters out time-wasters and speeds up yes decisions.",
        ],
        "checkpoint": "A stranger can find you, understand the offer, and pay in under 3 minutes.",
    },
    {
        "id": 10,
        "phase": "launch",
        "title": "Build your sales system: script, follow-up, tracking",
        "goal": "Turn conversations into customers with a repeatable process.",
        "time": "half a day",
        "cost": "$0",
        "actions": [
            "Adapt the sales script in the Scripts section to your offer. Practice it out loud until it sounds like you.",
            "Set a follow-up rule: contact every interested prospect at day 1, day 3, day 7, and day 14. Most sales happen after the 4th–5th contact.",
            "Use a free CRM (HubSpot free tier) or a spreadsheet with columns: name, source, stage (New, Contacted, Quoted, Won, Lost), quote amount, next follow-up date.",
            "Send a written quote within 24 hours of any conversation, with a deadline and a payment link.",
            "Write an objection list with your answers: price, timing, trust, \"let me think about it\", and \"I already have someone\".",
            "Block 60–90 minutes every day as protected selling time. Selling is the job until you have a steady pipeline.",
        ],
        "deliverable": "A tracked pipeline with a script, a follow-up schedule, and a quote template.",
        "avoid": [
            "Waiting for customers to come to you. At the start, you go to them.",
            "Letting a hot lead go cold because you were busy delivering. Follow-up is part of the work.",
        ],
        "checkpoint": "Every lead has a stage and a next follow-up date.",
    },
    {
        "id": 11,
        "phase": "launch",
        "title": "Land your first 10 customers in 30 days",
        "goal": "Hit real revenue and learn what actually sells.",
        "time": "30 days",
        "cost": "$0–$100",
        "actions": [
            "Daily target for 21 working days: 20 new outreach messages or calls, 5 follow-ups, 1 post showing your work or advice.",
            "Use three channels at once: direct outreach (DM, text, call, email), local presence (Google Business Profile, Nextdoor, community groups, flyers), and referrals (ask every happy customer for 2 names).",
            "Offer a launch deal for the first 5 customers in exchange for a testimonial and a referral, but never go below your price floor from Step 3.",
            "Partner with businesses that serve the same customer without competing (for example property managers for cleaners, realtors for movers, gyms for nutrition coaches). Offer a referral fee.",
            "Review results weekly: which channel booked the most conversations, which message got replies, which package sold? Do more of what works and cut what does not.",
            "Only test paid ads after you have a proven offer and at least a few sales. Start at $10 per day for 7 days, track cost per lead and cost per customer, and stop if the numbers do not work.",
        ],
        "deliverable": "10 paid customers (or your best progress toward it), a weekly results log, and 3 testimonials.",
        "avoid": [
            "Spending on ads before your organic offer converts.",
            "Discounting every time someone hesitates. Add value or a smaller starter package instead.",
        ],
        "checkpoint": "Revenue is arriving weekly and you know your best channel and best package.",
    },
    {
        "id": 12,
        "phase": "launch",
        "title": "Deliver well, document it, and collect proof",
        "goal": "Turn each job into reviews, case studies, and referrals.",
        "time": "ongoing",
        "cost": "$0",
        "actions": [
            "Set expectations at the start: timeline, what is included, how to reach you. Confirm everything in writing.",
            "Do slightly more than promised on every first job. Be early, communicate before problems happen, and fix mistakes fast.",
            "Take before and after photos or screenshots (with permission) and save results in a folder.",
            "Ask for a review within 24 hours of finishing, while they are happy. Send the direct Google review link. Aim for your first 5 reviews in 30 days.",
            "Turn your best result into a 1-page case study: problem, what you did, result, a quote.",
            "Ask every customer: \"Who else do you know who needs this?\" Offer a small thank-you credit for referrals.",
        ],
        "deliverable": "5 reviews, 3 case studies or testimonials, and a referral habit.",
        "avoid": [
            "Hiding problems. Customers forgive mistakes handled well. They do not forgive silence.",
        ],
        "checkpoint": "Customers are bringing you other customers.",
    },
    {
        "id": 13,
        "phase": "grow",
        "title": "Know your numbers, raise your price, reinvest wisely",
        "goal": "Make sure the business makes money, not just activity.",
        "time": "weekly, 1 hour",
        "cost": "$0",
        "actions": [
            "Every Friday, record: revenue, expenses, profit, number of customers, number of new leads, close rate (customers divided by quotes), and average sale.",
            "Calculate profit margin (profit divided by revenue). If it is under 30% for a service business, raise prices, cut costs, or drop low-profit work.",
            "After 5–10 successful sales with no price objections, raise your prices 10–20% for new customers.",
            "Keep 1–3 months of operating expenses as a cash cushion before taking large draws or buying equipment.",
            "Reinvest in the one thing that increases sales: better tools, a second service, or a proven ad channel. Avoid spending on things that only look professional.",
            "Rent or lease expensive equipment first. Buy after you are booked for months.",
        ],
        "deliverable": "A weekly numbers sheet and a pricing decision.",
        "avoid": [
            "Confusing revenue with profit.",
            "Hiring before you have predictable monthly revenue and a documented process.",
        ],
        "checkpoint": "You can state your monthly revenue, profit, and close rate without looking them up.",
    },
    {
        "id": 14,
        "phase": "grow",
        "title": "Build business credit and funding readiness",
        "goal": "Prepare the business to qualify for credit and funding when you need it, built on clean records, not shortcuts.",
        "time": "ongoing, 60–90 days to establish",
        "cost": "$0–$100",
        "actions": [
            "Confirm your business has the basics lenders look for: legal entity, EIN, business bank account, business phone number and address, website, and professional email.",
            "Apply for a free D-U-N-S number from Dun & Bradstreet so your business can have a business credit file.",
            "Open starter vendor accounts that report to business credit bureaus (net-30 accounts for office or supply purchases). Buy only what you would buy anyway and pay early or on time.",
            "Check your personal credit report free at annualcreditreport.com. Review for errors and plan to pay down revolving balances toward 30% utilization or lower. Dispute inaccurate items using the credit bureaus' official dispute process.",
            "Keep 6–12 months of bank statements, profit-and-loss statements, tax returns, and your formation documents in one funding folder.",
            "Write a one-page use-of-funds plan: how much you need, exactly what it buys, and how it increases revenue.",
            "Explore SBA-backed options, microloans, community development financial institutions (CDFIs), and local SBDCs or business centers. Many offer free counseling.",
        ],
        "deliverable": "A funding folder, a D-U-N-S number, and 2–3 vendor accounts reporting.",
        "avoid": [
            "Paying anyone who guarantees approval, \"erases\" accurate negative items, or offers a new credit identity. Those are scams or illegal.",
            "Borrowing before you can show consistent revenue and a clear plan for the money.",
        ],
        "checkpoint": "Your documents are organized and a lender could review your business in 10 minutes.",
    },
    {
        "id": 15,
        "phase": "grow",
        "title": "Your 30/60/90-day plan and weekly operating rhythm",
        "goal": "Keep the business moving without burnout.",
        "time": "1 hour to plan, then weekly",
        "cost": "$0",
        "actions": [
            "Days 1–30 goal: validate, register, open the account, and land your first paying customers. Success metric: first revenue and 3 testimonials.",
            "Days 31–60 goal: build a consistent pipeline. Success metric: predictable weekly leads, 10 customers total, 5 reviews, one recurring client.",
            "Days 61–90 goal: improve profit and systems. Success metric: raised prices, documented process, first funding folder complete, and a decision on your next hire, tool, or offer.",
            "Weekly rhythm: Monday plan and outreach, Tuesday–Thursday sell and deliver, Friday numbers and follow-ups, weekend rest. Protect one full day off.",
            "Monthly: review profit, set tax payments aside, update your offers, and decide what to stop doing.",
            "Every quarter: revisit your structure, insurance, pricing, and goals.",
        ],
        "deliverable": "A written 90-day plan on one page and a recurring weekly calendar block.",
        "avoid": [
            "Working in the business all week with no time to work on it.",
        ],
        "checkpoint": "You wrote down what \"done\" looks like at day 30, 60, and 90.",
    },
]

BUDGET = {
    "note": "Illustrative lean launch costs. Your state, city, and industry will change these numbers.",
    "items": [
        {"item": "EIN from IRS.gov", "cost": "$0"},
        {"item": "Domain name (1 year)", "cost": "$10–$15"},
        {"item": "Google Business Profile", "cost": "$0"},
        {"item": "One-page website on a free or low-cost builder", "cost": "$0–$15/mo"},
        {"item": "Free bookkeeping (Wave) and free CRM (HubSpot)", "cost": "$0"},
        {"item": "Payment link (Stripe, Square) — fees come out of sales", "cost": "$0 upfront"},
        {"item": "Flyers or simple printed materials", "cost": "$15–$30"},
        {"item": "Starter supplies for your first jobs", "cost": "$25–$50"},
        {"item": "Not included: state LLC fee, local licenses, insurance", "cost": "varies"},
    ],
}

SCRIPTS = [
    {
        "title": "First message (DM, text, or email)",
        "body": "Hi [Name], I'm [Your Name] with [Business]. I help [customer type] with [problem] by [what you do]. I noticed [specific thing about them]. I'm taking on a few new clients this month. Would it be okay if I sent you a quick price sheet, or would a 10-minute call be easier?",
    },
    {
        "title": "Discovery call (10 minutes)",
        "body": "1) \"What's the biggest headache with [problem] right now?\" 2) \"What have you tried, and what did it cost?\" 3) \"If this was handled perfectly, what would change for you?\" 4) \"When would you want this done?\" Then present the package that fits and say: \"Does that sound like what you need? I can get you started [date].\"",
    },
    {
        "title": "Follow-up (day 3)",
        "body": "Hi [Name], following up on the [package] we talked about. I have an opening on [date]. Want me to hold it for you? Here's the link to confirm: [payment link].",
    },
    {
        "title": "Handling \"It's too expensive\"",
        "body": "\"I understand. Most of my clients felt that before they compared it to the cost of [problem not being solved]. If the full package doesn't fit, my Starter option is [price] and lets you try it with less risk. Would that work better?\"",
    },
    {
        "title": "Review request",
        "body": "Hi [Name], thank you again for trusting me with [job]. If you're happy with the result, would you leave a quick review? It takes under a minute and helps a small business like mine a lot: [Google review link]. And if you know anyone else who needs [service], I'd appreciate an introduction.",
    },
]

TOOLS = [
    {"category": "Legal & entity", "tools": ["Your Secretary of State website", "IRS.gov EIN application", "USPTO trademark search"]},
    {"category": "Banking & bookkeeping", "tools": ["Mercury or Relay (online business banking)", "Wave (free)", "QuickBooks"]},
    {"category": "Storefront", "tools": ["Google Business Profile", "Namecheap (domain)", "Squarespace or Carrd (site)"]},
    {"category": "Payments & booking", "tools": ["Stripe Payment Links", "Square", "Calendly"]},
    {"category": "Sales & CRM", "tools": ["HubSpot free CRM", "Google Sheets pipeline tracker"]},
    {"category": "Free help", "tools": ["SBA.gov", "Local SBDC (Small Business Development Center)", "SCORE mentors"]},
]

DISCLAIMER = (
    "PEN2PRO provides education, strategy, organization, and readiness tools. This plan is not legal, tax, "
    "accounting, or financial advice, and PEN2PRO does not guarantee business success, credit repair results, "
    "funding approval, or loan approval. Costs and requirements vary by state and industry. Confirm legal and "
    "tax decisions with a qualified professional."
)


def outline():
    return {
        "plan": PLAN,
        "phases": PHASES,
        "steps": [
            {k: s[k] for k in ("id", "phase", "title", "goal", "time", "cost")} for s in STEPS
        ],
        "disclaimer": DISCLAIMER,
    }


def sample():
    return {"plan": PLAN, "phases": PHASES, "step": STEPS[0], "disclaimer": DISCLAIMER}


def full():
    return {
        "plan": PLAN,
        "phases": PHASES,
        "steps": STEPS,
        "budget": BUDGET,
        "scripts": SCRIPTS,
        "tools": TOOLS,
        "disclaimer": DISCLAIMER,
    }
