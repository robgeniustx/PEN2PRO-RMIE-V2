from __future__ import annotations
from sqlalchemy import Integer, String, Text, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from app.db import Base


class WaitlistEntry(Base):
    __tablename__ = "waitlist_entries"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(255))
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    phone: Mapped[str | None] = mapped_column(String(64), nullable=True, default="")
    business_idea: Mapped[str | None] = mapped_column(Text, nullable=True, default="")
    interest: Mapped[str] = mapped_column(String(64), default="Free Roadmap")
    referral: Mapped[str | None] = mapped_column(String(255), nullable=True, default="")
    source: Mapped[str | None] = mapped_column(String(512), nullable=True, default="")
    submitted_at: Mapped[DateTime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    def as_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone or "",
            "business_idea": self.business_idea or "",
            "interest": self.interest or "Free Roadmap",
            "referral": self.referral or "",
            "source": self.source or "",
            "submitted_at": self.submitted_at.isoformat() if self.submitted_at else None,
        }
