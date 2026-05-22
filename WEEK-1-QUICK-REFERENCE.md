# Week 1 Quick Reference Card
**Print this. Use this. Execute this.**

---

## DAY 1-2: GITHUB

```bash
cd /Users/robgenius/Documents/GitHub/PEN2PRO-RMIE-V2/
git init
git add .
git commit -m "Phase 5 Complete: Production-Ready Business Development Platform"
git branch -M main
git remote add origin https://github.com/[YOUR-USERNAME]/pen2pro.git
git push -u origin main
```

**Verify**: https://github.com/[YOUR-USERNAME]/pen2pro loads with your code.

---

## DAY 2-3: MONGODB

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up with: `robertg@xlr8pressurewashing.com`
3. Create cluster: `pen2pro` (AWS, us-east-1, M0 free tier)
4. Create user: `pen2pro_admin` with 20+ char password
5. Whitelist IP: 0.0.0.0/0
6. Copy connection string:
```
mongodb+srv://pen2pro_admin:[PASSWORD]@pen2pro.mongodb.net/pen2pro?retryWrites=true&w=majority
```
7. **SAVE THIS** — you need it tomorrow.

---

## DAY 3-4: API KEYS (Create secure document with these)

**OpenAI**: https://platform.openai.com/api-keys
- Save as: `OPENAI_API_KEY`

**Stripe**: https://dashboard.stripe.com/apikeys
- Save as: `STRIPE_PUBLIC_KEY` (publishable)
- Save as: `STRIPE_SECRET_KEY` (secret)

**Twilio**: https://console.twilio.com/
- Save as: `TWILIO_ACCOUNT_SID`
- Save as: `TWILIO_AUTH_TOKEN`
- Save as: `TWILIO_PHONE_NUMBER` (format: +1XXXXXXXXXX)

**ElevenLabs**: https://elevenlabs.io/app/settings/api-keys
- Save as: `ELEVENLABS_API_KEY`

**SendGrid**: https://sendgrid.com/ (sign up, verify email, create API key)
- Save as: `SENDGRID_API_KEY`

---

## DAY 4-5: RENDER (Backend Deployment)

1. Go to https://render.com (sign up with GitHub)
2. Click "New +" → "Web Service"
3. Select `pen2pro` repo → Connect

**Configure**:
- Name: `pen2pro-api`
- Runtime: Python 3.9
- Build: `pip install -r requirements.txt`
- Start: `gunicorn -w 4 -b 0.0.0.0 -k uvicorn.workers.UvicornWorker main:app`
- Plan: Starter (free)

**Add environment variables** (copy all from `.env.example`):
```
MONGODB_URI=mongodb+srv://pen2pro_admin:[PASSWORD]@pen2pro.mongodb.net/pen2pro?retryWrites=true&w=majority
JWT_SECRET_KEY=[your-secret-32-chars]
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_...
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1XXXXXXXXXX
ELEVENLABS_API_KEY=...
SENDGRID_API_KEY=...
ENVIRONMENT=production
ENABLE_VOICE_CALLS=true
ENABLE_EMAIL_MARKETING=true
ENABLE_WEBSITE_BUILDER=true
ENABLE_CRM=true
ENABLE_RMIE=true
```

Click "Create Web Service" → Wait 5-10 minutes

**Test**:
```bash
curl https://pen2pro-api.onrender.com/health
```
Should return: `{"status":"ok","environment":"production"}`

**SAVE THIS URL** for tomorrow.

---

## DAY 5: VERCEL (Frontend Deployment)

1. Go to https://vercel.com (sign up with GitHub)
2. Click "Add New..." → "Project"
3. Select `pen2pro` repo → Import

**Configure**:
- Framework: React
- Build: `cd frontend && npm run build`
- Output: `frontend/dist`

**Add environment variables**:
```
VITE_API_URL=https://pen2pro-api.onrender.com
VITE_STRIPE_PUBLIC_KEY=pk_...
```

Click "Deploy" → Wait 3-5 minutes

**URL will be**: https://pen2pro-[random].vercel.app

**Test**: Open URL in browser, verify it loads.

---

## VERIFICATION (After Day 5)

- [ ] `curl https://pen2pro-api.onrender.com/health` returns OK
- [ ] https://pen2pro-[random].vercel.app loads
- [ ] Can sign up
- [ ] Can log in
- [ ] Can create blueprint
- [ ] Dashboard loads
- [ ] No errors in browser console (F12)

---

## IF STUCK

**Backend won't deploy**:
- Check Render logs: https://dashboard.render.com
- Verify environment variables are set
- Verify `requirements.txt` exists

**Frontend won't deploy**:
- Check Vercel logs: https://vercel.com/dashboard
- Test locally: `cd frontend && npm run build`

**API calls failing**:
- Verify `VITE_API_URL` in Vercel env vars
- Check that backend is running (health check test)
- Check browser console for CORS errors

---

## WEEK 2 PREVIEW

After Week 1 deployment:
1. Test every feature (sign up, blueprint, agents, CRM, RMIE, voice)
2. Invite 20 beta testers
3. Collect feedback
4. Fix bugs

---

## TIMELINE

| Day | Action | Deliverable |
|-----|--------|------------|
| 1-2 | GitHub push | Code live on GitHub |
| 2-3 | MongoDB setup | MongoDB URI saved |
| 3-4 | Collect API keys | All keys documented securely |
| 4-5 | Deploy backend | Backend live on Render |
| 5 | Deploy frontend | Frontend live on Vercel |

**Total time**: 5 days, ~2 hours/day = 10 hours total.

---

## GO.

Start Day 1 now. GitHub push first.

