from fastapi import APIRouter, HTTPException, Query

from app.services.dashboard_service import get_dashboard_module, list_dashboard_modules

router = APIRouter(prefix="/api/dashboard", tags=["dashboard"])


@router.get("/modules")
def modules(plan: str = Query("free"), role: str = Query("member")):
    return list_dashboard_modules(plan, role)


@router.get("/modules/{module_key}")
def module_detail(module_key: str, plan: str = Query("free"), role: str = Query("member")):
    module = get_dashboard_module(module_key, plan, role)
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    return module
