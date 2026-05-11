from sqlalchemy import Integer, String, Text, Date
from sqlalchemy.orm import Mapped, mapped_column
from app.db import Base
from app.models.common import TimestampMixin

class DailyReport(Base, TimestampMixin):
    __tablename__ = "daily_reports"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    company_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    report_date: Mapped[Date] = mapped_column(Date)
    summary: Mapped[str] = mapped_column(Text)
    completed_tasks: Mapped[str | None] = mapped_column(Text, nullable=True)
    pending_tasks: Mapped[str | None] = mapped_column(Text, nullable=True)
    recommended_next_actions: Mapped[str | None] = mapped_column(Text, nullable=True)
    risks_or_blockers: Mapped[str | None] = mapped_column(Text, nullable=True)
    metrics_snapshot: Mapped[str | None] = mapped_column(Text, nullable=True)
