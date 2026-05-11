import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { generateSocialEngine } from '../api/socialApi';
import { mockSocialEngine } from '../data/mockSocialCalendar';

export default function SocialPage() {
  const [params] = useSearchParams();
  const [data, setData] = useState(mockSocialEngine);
  const [tier] = useState(params.get('tier') || 'free');

  const submit = async () => {
    const payload = {
      tier,
      business_name: 'PEN2PRO Biz',
      offer: 'Growth consulting',
      ideal_customer: 'SMB owners',
      platform_focus: ['instagram'],
      calendar_length: '7_day',
      goal: 'leads',
    };
    setData(await generateSocialEngine(payload));
  };

  return (
    <div className="p-4 bg-slate-950 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Social Media Engine</h1>
      <button
        className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg font-semibold text-sm mb-4"
        onClick={submit}
      >
        Generate Social Engine
      </button>
      <pre className="text-xs mt-4 whitespace-pre-wrap text-slate-300">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
