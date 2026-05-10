from app.agents.base_agent import BaseAgent
from app.services.social_service import generate_short_video_scripts


class ShortVideoScriptAgent(BaseAgent):
    name = "short_video_script_agent"
    description = "Generates short form video scripts"
    tier_required = "elite"

    def validate_input(self, request_data):
        return "platform_focus" in request_data

    def run(self, request_data):
        return generate_short_video_scripts(request_data)
