import React, { useState } from 'react';

export default function AgentResultsDisplay({ blueprint }) {
  const [expandedSection, setExpandedSection] = useState('executive_summary');

  if (!blueprint.executive_summary) {
    return null;
  }

  const sections = [
    {
      id: 'executive_summary',
      title: 'Executive Summary',
      content: blueprint.executive_summary,
    },
    {
      id: 'market_analysis',
      title: 'Market Analysis',
      content: blueprint.market_analysis,
    },
    {
      id: 'target_audience',
      title: 'Target Audience',
      content: blueprint.target_audience,
    },
    {
      id: 'value_proposition',
      title: 'Value Proposition',
      content: blueprint.value_proposition,
    },
    {
      id: 'revenue_model',
      title: 'Revenue Model & Unit Economics',
      content: blueprint.revenue_model,
    },
    {
      id: 'competitive_advantage',
      title: 'Competitive Advantage',
      content: blueprint.competitive_advantage,
    },
    {
      id: 'risk_analysis',
      title: 'Risk Analysis',
      content: blueprint.risk_analysis,
    },
    {
      id: 'success_metrics',
      title: 'Key Success Metrics',
      content: blueprint.success_metrics,
    },
    {
      id: 'founder_coaching',
      title: 'Founder Coaching',
      content: blueprint.founder_coaching,
    },
  ];

  const renderContent = (content) => {
    if (typeof content === 'string') {
      return (
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {content}
        </p>
      );
    }

    if (typeof content === 'object' && content !== null) {
      return (
        <div className="space-y-3">
          {Object.entries(content).map(([key, value]) => (
            <div key={key} className="border-l-4 border-sky-400 pl-4">
              <h4 className="font-semibold text-gray-800 capitalize mb-1">
                {key.replace(/_/g, ' ')}
              </h4>
              <div className="text-gray-700">
                {Array.isArray(value) ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {value.map((item, i) => (
                      <li key={i} className="text-sm">
                        {typeof item === 'string'
                          ? item
                          : JSON.stringify(item)}
                      </li>
                    ))}
                  </ul>
                ) : typeof value === 'object' ? (
                  <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                    {JSON.stringify(value, null, 2)}
                  </pre>
                ) : (
                  <p className="text-sm">{String(value)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return <p className="text-gray-700">{String(content)}</p>;
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-sky-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-sky-800">
              AI-Generated Business Plan
            </h3>
            <p className="mt-1 text-sm text-sky-700">
              Powered by GPT-4 Blueprint Agent. Your personalized strategic business plan.
            </p>
          </div>
        </div>
      </div>

      {blueprint.roadmap && blueprint.roadmap.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Implementation Roadmap
          </h2>
          <div className="space-y-4">
            {blueprint.roadmap.map((phase, idx) => (
              <div
                key={idx}
                className="border-l-4 border-amber-400 pl-4 py-2"
              >
                <h3 className="font-semibold text-gray-900">
                  {phase.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Duration: {phase.duration_weeks} weeks
                </p>
                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Key Milestones
                    </p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      {phase.key_milestones?.map((m, i) => (
                        <li key={i} className="text-sm text-gray-700">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {sections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === section.id ? null : section.id
                )
              }
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-gray-900 text-left">
                {section.title}
              </h3>
              <svg
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  expandedSection === section.id ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {expandedSection === section.id && (
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                {renderContent(section.content)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
