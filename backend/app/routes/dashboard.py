from fastapi import APIRouter, Depends, HTTPException, Response

from app import store
from app.auth_deps import current_user
from app.services.dashboard_service import (
    create_module_record,
    delete_module_record,
    export_module_csv,
    get_dashboard_module,
    get_module_records,
    list_dashboard_modules,
    update_module_record,
)

# Every dashboard route requires a signed-in user. The plan and role come from the account, never from the URL.
router = APIRouter(prefix="/api/dashboard", tags=["dashboard"])


def _unlocked_module(module_key: str, user: dict):
    module = get_dashboard_module(module_key, user["tier"], user["role"], user["email"])
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    if not module["access"]["unlocked"]:
        raise HTTPException(status_code=403, detail=f"{module['label']} requires the {module['required_plan']} plan.")
    return module


@router.get("/modules")
def modules(user: dict = Depends(current_user)):
    return list_dashboard_modules(user["tier"], user["role"])


@router.get("/modules/{module_key}")
def module_detail(module_key: str, user: dict = Depends(current_user)):
    module = get_dashboard_module(module_key, user["tier"], user["role"], user["email"])
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    return module


@router.get("/modules/{module_key}/records")
def module_records(module_key: str, user: dict = Depends(current_user)):
    module = _unlocked_module(module_key, user)
    return {"module": module_key, "records": module["records"], "access": module["access"]}


@router.post("/modules/{module_key}/records")
def create_record(module_key: str, payload: dict, user: dict = Depends(current_user)):
    _unlocked_module(module_key, user)
    try:
        record = create_module_record(user["email"], module_key, payload, user["tier"], user["role"])
    except store.StoreLimit as exc:
        raise HTTPException(status_code=413, detail=str(exc))
    if not record:
        raise HTTPException(status_code=400, detail="Unable to create dashboard record")
    return {"module": module_key, "record": record, "records": get_module_records(user["email"], module_key)}


@router.patch("/modules/{module_key}/records/{record_id}")
def update_record(module_key: str, record_id: str, payload: dict, user: dict = Depends(current_user)):
    _unlocked_module(module_key, user)
    record = update_module_record(user["email"], module_key, record_id, payload, user["tier"], user["role"])
    if not record:
        raise HTTPException(status_code=404, detail="Dashboard record not found")
    return {"module": module_key, "record": record, "records": get_module_records(user["email"], module_key)}


@router.delete("/modules/{module_key}/records/{record_id}")
def delete_record(module_key: str, record_id: str, user: dict = Depends(current_user)):
    _unlocked_module(module_key, user)
    if not delete_module_record(user["email"], module_key, record_id, user["tier"], user["role"]):
        raise HTTPException(status_code=404, detail="Dashboard record not found")
    return {"module": module_key, "deleted": True, "records": get_module_records(user["email"], module_key)}


@router.get("/modules/{module_key}/export.csv")
def export_records(module_key: str, user: dict = Depends(current_user)):
    _unlocked_module(module_key, user)
    body = export_module_csv(user["email"], module_key)
    if body is None:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    return Response(
        content=body,
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="{module_key}-records.csv"'},
    )
