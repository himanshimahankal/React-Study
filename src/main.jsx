import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.jsx' /* import Page */
import './index.css' /* import global style here */


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home /> {/* use Page here */}
  </StrictMode>,
)
