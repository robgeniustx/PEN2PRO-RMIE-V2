import {useEffect,useState} from 'react'; import {listLeads} from '../api/crmApi'; import PipelineBoard from '../components/crm/PipelineBoard';
export default function PipelinePage(){const[l,setL]=useState([]);useEffect(()=>{listLeads().then(setL)},[]); return <div><h1>Pipeline</h1><PipelineBoard leads={l}/></div>}
