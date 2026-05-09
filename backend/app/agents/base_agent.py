class BaseAgent:
    name = "base_agent"
    description = "Base agent"
    tier_required = "free"

    def validate_input(self, request_data):
        return bool(request_data)

    def run(self, request_data):
        raise NotImplementedError
