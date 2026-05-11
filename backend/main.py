from fastapi import FastAPI
from app.database import Base, engine
from app.routes.analytics import router as analytics_router
from app.routes.admin import router as admin_router

app = FastAPI(title="PEN2PRO RMIE Live")
Base.metadata.create_all(bind=engine)
app.include_router(analytics_router)
app.include_router(admin_router)

@app.get('/api/health')
def health(): return {"status":"ok"}
