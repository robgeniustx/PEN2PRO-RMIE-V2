from __future__ import annotations
from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column
from app.db import Base
from app.models.common import TimestampMixin


class WaitlistSignup(Base, TimestampMixin):
    __tablename__ = "waitlist_signups"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(255))
    email: Mapped[str] = mapped_column(String(255), index=True)
    phone: Mapped[str | None] = mapped_column(String(50), nullable=True)
    business_idea: Mapped[str | None] = mapped_column(Text, nullable=True)
    interest: Mapped[str] = mapped_column(String(64), default="Free Roadmap")
    referral: Mapped[str | None] = mapped_column(String(255), nullable=True)
    source: Mapped[str | None] = mapped_column(Text, nullable=True)
