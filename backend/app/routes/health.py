from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "PEN2PRO RMIE API"
    }


@router.get("/api/health")
def api_health_check():
    return {
        "status": "ok",
        "service": "PEN2PRO RMIE API"
    }
