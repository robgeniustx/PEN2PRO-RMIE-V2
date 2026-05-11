import { useEffect, useState } from 'react';
import { getPipelineSummary, getDueFollowUps, listLeads } from '../api/crmApi';
import PipelineSummary from '../components/crm/PipelineSummary';
import FollowUpWriter from '../components/crm/FollowUpWriter';

export default function CrmPage() {
  const [summary, setSummary] = useState({});
  const [dueFollowUps, setDueFollowUps] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getPipelineSummary().then(setSummary);
    getDueFollowUps().then(setDueFollowUps);
    listLeads().then(setLeads);
  }, []);

  return (
    <div className="p-4 text-white bg-slate-950 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">CRM Dashboard</h1>
      <PipelineSummary summary={summary} />
      <h2 className="text-lg font-semibold mt-6 mb-2">Due Follow-Ups</h2>
      {dueFollowUps.map((x) => (
        <div key={x.id} className="text-slate-300 text-sm mb-1">{x.message}</div>
      ))}
      <h2 className="text-lg font-semibold mt-6 mb-2">Recent Leads</h2>
      {leads.slice(0, 3).map((x) => (
        <div key={x.id} className="text-slate-300 text-sm mb-1">{x.name}</div>
      ))}
      <FollowUpWriter />
    </div>
  );
}
