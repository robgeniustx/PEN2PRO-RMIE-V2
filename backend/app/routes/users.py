from fastapi import APIRouter

router = APIRouter(tags=["Users"])


@router.get("/")
def list_users():
    return {
        "status": "ok",
        "message": "Users route is connected.",
        "users": []
    }


@router.get("/me")
def current_user_placeholder():
    return {
        "status": "ok",
        "message": "Current user placeholder route is connected."
    }
