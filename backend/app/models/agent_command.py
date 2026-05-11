from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column
from app.db import Base
from app.models.common import TimestampMixin

class AgentCommand(Base, TimestampMixin):
    __tablename__ = "agent_commands"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    company_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    blueprint_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    agent_name: Mapped[str] = mapped_column(String(64))
    command_type: Mapped[str] = mapped_column(String(32))
    command_text: Mapped[str] = mapped_column(Text)
    input_payload: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(32), default="queued")
    result_payload: Mapped[str | None] = mapped_column(Text, nullable=True)
    error_message: Mapped[str | None] = mapped_column(Text, nullable=True)
    tier_required: Mapped[str | None] = mapped_column(String(32), nullable=True)
