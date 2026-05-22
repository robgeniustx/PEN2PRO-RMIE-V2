import React from 'react';

export default function AgentExecutionStatus({ isRunning, estimatedTime, error }) {
  if (error) {
    return (
      <div className="border border-red-200 bg-red-50 rounded-lg p-4">
        <div className="flex items-start">
          <svg
            className="h-5 w-5 text-red-600 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Agent Execution Failed
            </h3>
            <p className="mt-1 text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isRunning) {
    return null;
  }

  return (
    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="animate-spin">
            <svg
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            AI Agent Processing
          </h3>
          <p className="mt-1 text-sm text-blue-700">
            Your Blueprint Agent is analyzing your business idea and generating a comprehensive strategic plan...
          </p>
          <p className="mt-2 text-xs text-blue-600 font-semibold">
            Estimated time: {estimatedTime || '2-3 minutes'}
          </p>
          <div className="mt-3 w-full bg-blue-200 rounded-full h-1">
            <div
              className="bg-blue-600 h-1 rounded-full animate-pulse"
              style={{ width: '50%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
