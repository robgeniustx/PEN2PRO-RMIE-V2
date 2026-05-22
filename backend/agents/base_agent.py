import json
from abc import ABC, abstractmethod
from openai import AsyncOpenAI

from config import get_settings

settings = get_settings()


class BaseAgent(ABC):
    """Abstract base class for all AI agents."""

    def __init__(self):
        self.client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
        self.model = settings.OPENAI_MODEL

    @abstractmethod
    async def execute(self, blueprint: dict) -> dict:
        """Execute agent and return structured results."""
        pass

    async def _call_gpt(self, prompt: str, json_schema: dict = None) -> dict:
        """Call GPT-4 with optional JSON schema."""
        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7,
                timeout=settings.OPENAI_TIMEOUT,
            )

            content = response.choices[0].message.content

            # Parse JSON if schema provided
            if json_schema:
                try:
                    return json.loads(content)
                except json.JSONDecodeError:
                    # Try to extract JSON from response
                    start = content.find("{")
                    end = content.rfind("}") + 1
                    if start != -1 and end > start:
                        return json.loads(content[start:end])
                    raise ValueError("Could not parse JSON response")

            return {"result": content}

        except Exception as e:
            return {"error": str(e)}

    def _build_blueprint_context(self, blueprint: dict) -> str:
        """Build context string from blueprint data."""
        context = f"""
Business Idea: {blueprint.get('business_idea')}
Description: {blueprint.get('description', 'Not provided')}
Category: {blueprint.get('category', 'Not specified')}
Industry: {blueprint.get('industry', 'Not specified')}
Timeline: {blueprint.get('timeline_weeks', 12)} weeks
Investment Budget: ${blueprint.get('estimated_investment', 'Not specified')}
"""
        return context.strip()
