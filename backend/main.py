from fastapi import FastAPI
from app.db import Base, engine
from app.routes import automation, tasks, activity
from app.models import agent_command, agent_approval, daily_report, agent_run, task, activity_log
app = FastAPI(title='PEN2PRO RMIE Live')
Base.metadata.create_all(bind=engine)
@app.get('/api/health')
def health(): return {'status':'ok'}
app.include_router(automation.router, prefix='/api/automation', tags=['automation'])
app.include_router(tasks.router, prefix='/api/tasks', tags=['tasks'])
app.include_router(activity.router, prefix='/api/activity', tags=['activity'])
