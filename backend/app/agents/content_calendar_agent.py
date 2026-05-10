from app.agents.base_agent import BaseAgent
from app.services.social_service import generate_content_calendar


class ContentCalendarAgent(BaseAgent):
    name = "content_calendar_agent"
    description = "Generates social content calendars"
    tier_required = "pro"

    def validate_input(self, request_data):
        return "calendar_length" in request_data

    def run(self, request_data):
        return generate_content_calendar(request_data)
