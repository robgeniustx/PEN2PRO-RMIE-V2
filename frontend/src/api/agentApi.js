import axios from 'axios';
import { getToken } from './authApi';

const API_BASE_URL = '/api/agents';

const agentClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000, // 2 minutes - agents take time to run
});

// Auto-inject token
agentClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Trigger the Blueprint Agent to analyze a blueprint
 * @param {string} blueprintId - The blueprint ID to analyze
 * @returns {Promise} Response with message, estimated_time, status
 */
export const runBlueprintAgent = async (blueprintId) => {
  try {
    const response = await agentClient.post(`/${blueprintId}/run-blueprint-agent`);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.detail || 'Failed to run agent. Please try again.';
    throw new Error(message);
  }
};

/**
 * Get the status of an agent run
 * @param {string} blueprintId - The blueprint ID
 * @param {string} agentType - The agent type (blueprint, seo, social, etc.)
 * @returns {Promise} Agent run details including status and results
 */
export const getAgentRunStatus = async (blueprintId, agentType = 'blueprint') => {
  try {
    const response = await agentClient.get(`/${blueprintId}/status?agent_type=${agentType}`);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.detail || 'Failed to get agent status.';
    throw new Error(message);
  }
};

/**
 * Trigger the SEO Strategy Agent to develop organic growth strategy
 * @param {string} blueprintId - The blueprint ID to analyze
 * @returns {Promise} Response with message, estimated_time, status
 */
export const runSEOAgent = async (blueprintId) => {
  try {
    const response = await agentClient.post(`/${blueprintId}/run-seo-agent`);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.detail || 'Failed to run SEO agent. Please try again.';
    throw new Error(message);
  }
};

export default agentClient;
