from openai import AsyncOpenAI
from app.config import settings
import logging
from abc import ABC, abstractmethod

logger = logging.getLogger(__name__)

class BaseAgent(ABC):
    """Base class for all AI agents"""

    def __init__(self):
        self.client = AsyncOpenAI(api_key=settings.openai_api_key)
        self.model = settings.openai_model
        self.temperature = settings.openai_temperature
        self.max_tokens = settings.openai_max_tokens

    @abstractmethod
    def get_system_prompt(self) -> str:
        """Return the system prompt for this agent"""
        pass

    @abstractmethod
    def get_user_prompt(self, **kwargs) -> str:
        """Build user prompt from kwargs"""
        pass

    async def run(self, **kwargs) -> dict:
        """Execute agent and return structured results"""
        try:
            system_prompt = self.get_system_prompt()
            user_prompt = self.get_user_prompt(**kwargs)

            logger.info(f"Running {self.__class__.__name__} agent")

            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt},
                ],
                temperature=self.temperature,
                max_tokens=self.max_tokens,
            )

            result_text = response.choices[0].message.content
            logger.info(f"{self.__class__.__name__} completed successfully")

            return self.parse_response(result_text)

        except Exception as e:
            logger.error(f"Agent error: {e}")
            raise

    @abstractmethod
    def parse_response(self, response_text: str) -> dict:
        """Parse AI response into structured format"""
        pass

    def _parse_json_from_response(self, text: str, start_marker: str = "```json", end_marker: str = "```") -> dict:
        """Extract JSON from markdown code block"""
        import json
        try:
            start_idx = text.find(start_marker)
            end_idx = text.find(end_marker, start_idx)

            if start_idx != -1 and end_idx != -1:
                json_str = text[start_idx + len(start_marker):end_idx].strip()
                return json.loads(json_str)
            else:
                return json.loads(text)
        except Exception as e:
            logger.error(f"Failed to parse JSON: {e}")
            return {}

