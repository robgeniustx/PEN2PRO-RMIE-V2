import {useEffect,useState} from 'react'; import {listCustomers} from '../api/crmApi';
export default function CustomersPage(){const[c,setC]=useState([]);useEffect(()=>{listCustomers().then(setC)},[]);return <div>{c.map(x=><div key={x.id}>{x.name} - {x.notes}</div>)}<p>Won lead conversion stub available.</p></div>}
