class BaseAgent:
    name = "Base Agent"
    description = ""
    tier_required = "free"

    def validate_input(self, payload):
        return payload

    def run(self, payload):
        raise NotImplementedError
