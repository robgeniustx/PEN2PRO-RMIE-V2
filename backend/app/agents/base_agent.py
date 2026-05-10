class BaseAgent:
    name = "Base"
    description = ""
    tier_required = "elite"

    def validate_input(self, request_data):
        return bool(request_data)
