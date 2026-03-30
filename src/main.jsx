import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'

// --- إعدادات Axios ---
// import axios from 'axios';
// We now rely on 'vite.config.js' Proxy instead of external environment variables
// --------------------

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
