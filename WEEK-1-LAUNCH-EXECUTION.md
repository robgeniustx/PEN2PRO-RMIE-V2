# PEN2PRO Week 1 Launch Execution
**Timeline**: 5 days to production-ready deployment  
**Status**: Infrastructure files ready. Execute these actions in sequence.

---

## DAY 1-2: GitHub & Code Repository Push

### Action 1: Initialize Git & Push to GitHub

**Step 1**: Navigate to your local repository and initialize git:
```bash
cd /Users/robgenius/Documents/GitHub/PEN2PRO-RMIE-V2/
git init
git add .
git commit -m "Phase 5 Complete: Production-Ready AI Business Development Platform"
```

**Step 2**: Create a GitHub repository at https://github.com/new
- **Repository name**: `pen2pro`
- **Description**: "AI-powered business development platform transforming ideas into income"
- **Privacy**: Private (until launch, then public)
- **Do NOT initialize with README** (you already have one)

**Step 3**: Add remote and push:
```bash
git branch -M main
git remote add origin https://github.com/[YOUR-USERNAME]/pen2pro.git
git push -u origin main
```

**Step 4**: Verify push succeeded by checking https://github.com/[YOUR-USERNAME]/pen2pro

---

## DAY 2-3: MongoDB Atlas Setup

### Action 2: Create MongoDB Cluster

**Step 1**: Go to https://www.mongodb.com/cloud/atlas
- Sign up with email: `robertg@xlr8pressurewashing.com`
- Create organization: "PEN2PRO"

**Step 2**: Create project named "PEN2PRO"

**Step 3**: Create cluster with these settings:
- **Cluster name**: `pen2pro`
- **Cloud provider**: AWS
- **Region**: us-east-1 (Virginia)
- **Cluster tier**: M0 (Free — sufficient for launch)

**Step 4**: Create database user:
- **Username**: `pen2pro_admin`
- **Password**: Generate 20+ character password. **SAVE THIS SECURELY** (1Password, LastPass, or secure note)
- Click "Create Database User"

**Step 5**: Configure network access:
- Go to "Network Access"
- Click "Add IP Address"
- Select "Allow access from anywhere" (0.0.0.0/0)
- Confirm

**Step 6**: Get connection string:
- Go to "Clusters" → Click "Connect" button
- Select "Drivers"
- Copy connection string:
```
mongodb+srv://pen2pro_admin:[PASSWORD]@pen2pro.mongodb.net/pen2pro?retryWrites=true&w=majority
```
- **Replace `[PASSWORD]` with your actual password**
- **SAVE THIS** — you'll need it for environment variables

---

## DAY 3-4: Collect API Keys

### Action 3: Gather All Required API Keys

Create a secure document (use 1Password or encrypted note) and save these:

**OpenAI**:
1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy: `sk-...` (save as `OPENAI_API_KEY`)

**Stripe** (both keys needed):
1. Go to https://dashboard.stripe.com/apikeys
2. Copy **Publishable key**: `pk_...` (save as `STRIPE_PUBLIC_KEY`)
3. Copy **Secret key**: `sk_...` (save as `STRIPE_SECRET_KEY`)
4. Scroll down to "Webhooks" section
5. Click "Add endpoint"
6. **After** you deploy (Day 5), add webhook URL: `https://pen2pro-api.onrender.com/webhooks/stripe`

**Twilio**:
1. Go to https://console.twilio.com/
2. Click "Account" (bottom left)
3. Copy **Account SID**: `AC...` (save as `TWILIO_ACCOUNT_SID`)
4. Copy **Auth Token** (save as `TWILIO_AUTH_TOKEN`)
5. Go to "Phone Numbers" → "Manage Numbers"
6. If you have a number: copy it (save as `TWILIO_PHONE_NUMBER`, format: `+1XXXXXXXXXX`)
7. If not: Click "Get a Number" (free trial gives $15 credit, enough for testing)

**ElevenLabs**:
1. Go to https://elevenlabs.io/app/settings/api-keys
2. Click "Create new API key"
3. Copy: (save as `ELEVENLABS_API_KEY`)

**SendGrid** (for email):
1. Go to https://sendgrid.com/ → Sign up
2. Complete verification
3. Go to Settings → API Keys
4. Click "Create API Key" (Full Access)
5. Copy: (save as `SENDGRID_API_KEY`)
6. Go to "Verified Senders" → Add sender: `noreply@pen2pro.com` (verify email)

---

## DAY 4-5: Deploy Backend to Render

### Action 4: Deploy Backend

**Step 1**: Go to https://render.com
- Sign up with GitHub account

**Step 2**: Click "New +" → "Web Service"
- Select your `pen2pro` GitHub repository
- Click "Connect"

**Step 3**: Configure service:
- **Name**: `pen2pro-api`
- **Runtime**: Python 3.9
- **Build command**: `pip install -r requirements.txt`
- **Start command**: `gunicorn -w 4 -b 0.0.0.0 -k uvicorn.workers.UvicornWorker main:app`
- **Plan**: Starter (free)

**Step 4**: Add environment variables (click "Add Secret File" or use Environment section):

Copy from `.env.example` in your repo. Add these (use values you collected):

```
MONGODB_URI=mongodb+srv://pen2pro_admin:[PASSWORD]@pen2pro.mongodb.net/pen2pro?retryWrites=true&w=majority
JWT_SECRET_KEY=your-secret-key-32-chars-minimum
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

**Step 5**: Click "Create Web Service"

**Step 6**: Wait for deployment (5-10 minutes). Once done, you'll see your API URL:
```
https://pen2pro-api.onrender.com
```

**Step 7**: Test health check:
```bash
curl https://pen2pro-api.onrender.com/health
```
Expected response: `{"status":"ok","environment":"production"}`

**SAVE THIS URL** — you'll need it for frontend deployment.

---

## DAY 5: Deploy Frontend to Vercel

### Action 5: Deploy Frontend

**Step 1**: Go to https://vercel.com
- Sign up with GitHub

**Step 2**: Click "Add New..." → "Project"
- Import your `pen2pro` repository

**Step 3**: Configure:
- **Framework Preset**: React
- **Build command**: `cd frontend && npm run build`
- **Output directory**: `frontend/dist`
- **Root directory**: `.` (leave as is)

**Step 4**: Add environment variables:
```
VITE_API_URL=https://pen2pro-api.onrender.com
VITE_STRIPE_PUBLIC_KEY=pk_...
```

**Step 5**: Click "Deploy"

**Step 6**: Wait 3-5 minutes for deployment

**Step 7**: You'll get a URL like:
```
https://pen2pro-[random].vercel.app
```

**SAVE THIS** — this is your live app.

---

## VERIFICATION CHECKLIST

After Day 5 deployment, verify everything works:

- [ ] Backend health check returns `{"status":"ok"}`
- [ ] Frontend loads without errors
- [ ] Can sign up at frontend URL
- [ ] Can log in
- [ ] Can create blueprint
- [ ] Dashboard loads
- [ ] No errors in browser console (F12 → Console tab)

---

## CRITICAL NEXT STEPS (After Week 1)

**Week 2**: Beta testing & feedback collection
**Week 3**: Domain setup, landing page, marketing infrastructure
**Week 4**: Paid acquisition & launch announcements
**Week 5**: Monitoring & scaling

---

## TROUBLESHOOTING

**Backend won't deploy**:
- Check Render logs: https://dashboard.render.com
- Verify `requirements.txt` exists
- Verify environment variables are set correctly
- Check that `main.py` exists in root directory

**Frontend won't deploy**:
- Check Vercel logs: https://vercel.com/dashboard
- Verify `frontend/` directory exists
- Verify `npm run build` works locally: `cd frontend && npm run build`

**API calls failing from frontend**:
- Check `VITE_API_URL` is correct in Vercel
- Verify backend is running (health check)
- Check browser console for CORS errors
- Verify API routes exist in backend

**Can't sign up**:
- Check MongoDB connection (test MONGODB_URI)
- Verify backend is running
- Check Render logs for errors
- Test signup endpoint with curl

---

**Week 1 execution complete** when:
✅ Code pushed to GitHub  
✅ MongoDB cluster running  
✅ Backend deployed to Render  
✅ Frontend deployed to Vercel  
✅ All verification checks pass  

**Timeline**: 5 days start to finish.

**You're ready.** Execute in order. Document any blockers. Move forward.

