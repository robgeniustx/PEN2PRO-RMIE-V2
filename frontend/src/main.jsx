import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import AppRoutes from './routes/AppRoutes';
import VoiceAssistant from './components/voice/VoiceAssistant';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <VoiceAssistant />
    </BrowserRouter>
  </React.StrictMode>
);
