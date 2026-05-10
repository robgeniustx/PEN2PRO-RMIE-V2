import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AutomationPage from '../pages/AutomationPage';
import AgentCommandCenterPage from '../pages/AgentCommandCenterPage';
import ApprovalsPage from '../pages/ApprovalsPage';
import DailyReportPage from '../pages/DailyReportPage';
import TasksPage from '../pages/TasksPage';
import LiveOperationsPage from '../pages/LiveOperationsPage';
import DashboardPage from '../pages/DashboardPage';
export default function AppRoutes(){return <Routes><Route path='/' element={<DashboardPage/>}/><Route path='/automation' element={<AutomationPage/>}/><Route path='/agent-command-center' element={<AgentCommandCenterPage/>}/><Route path='/approvals' element={<ApprovalsPage/>}/><Route path='/daily-report' element={<DailyReportPage/>}/><Route path='/tasks' element={<TasksPage/>}/><Route path='/live' element={<LiveOperationsPage/>}/></Routes>}
