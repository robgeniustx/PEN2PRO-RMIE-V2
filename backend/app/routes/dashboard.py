from fastapi import APIRouter, HTTPException, Query, Response

from app.services.dashboard_service import (
    create_module_record,
    delete_module_record,
    export_module_csv,
    get_dashboard_module,
    get_module_records,
    list_dashboard_modules,
    update_module_record,
)

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


@router.get("/modules/{module_key}/records")
def module_records(module_key: str, plan: str = Query("free"), role: str = Query("member")):
    module = get_dashboard_module(module_key, plan, role)
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    return {"module": module_key, "records": get_module_records(module_key), "access": module["access"]}


@router.post("/modules/{module_key}/records")
def create_record(module_key: str, payload: dict, plan: str = Query("free"), role: str = Query("member")):
    module = get_dashboard_module(module_key, plan, role)
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    if not module["access"]["unlocked"]:
        raise HTTPException(status_code=403, detail=f"{module['label']} requires {module['required_plan']}")
    record = create_module_record(module_key, payload, plan, role)
    if not record:
        raise HTTPException(status_code=400, detail="Unable to create dashboard record")
    return {"module": module_key, "record": record, "records": get_module_records(module_key)}


@router.patch("/modules/{module_key}/records/{record_id}")
def update_record(module_key: str, record_id: str, payload: dict, plan: str = Query("free"), role: str = Query("member")):
    module = get_dashboard_module(module_key, plan, role)
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    if not module["access"]["unlocked"]:
        raise HTTPException(status_code=403, detail=f"{module['label']} requires {module['required_plan']}")
    record = update_module_record(module_key, record_id, payload, plan, role)
    if not record:
        raise HTTPException(status_code=404, detail="Dashboard record not found")
    return {"module": module_key, "record": record, "records": get_module_records(module_key)}


@router.delete("/modules/{module_key}/records/{record_id}")
def delete_record(module_key: str, record_id: str, plan: str = Query("free"), role: str = Query("member")):
    module = get_dashboard_module(module_key, plan, role)
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    if not module["access"]["unlocked"]:
        raise HTTPException(status_code=403, detail=f"{module['label']} requires {module['required_plan']}")
    deleted = delete_module_record(module_key, record_id, plan, role)
    if not deleted:
        raise HTTPException(status_code=404, detail="Dashboard record not found")
    return {"module": module_key, "deleted": True, "records": get_module_records(module_key)}


@router.get("/modules/{module_key}/export.csv")
def export_records(module_key: str, plan: str = Query("free"), role: str = Query("member")):
    module = get_dashboard_module(module_key, plan, role)
    if not module:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    if not module["access"]["unlocked"]:
        raise HTTPException(status_code=403, detail=f"{module['label']} requires {module['required_plan']}")
    csv_body = export_module_csv(module_key)
    if csv_body is None:
        raise HTTPException(status_code=404, detail="Dashboard module not found")
    return Response(
        content=csv_body,
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="{module_key}-records.csv"'},
    )
