import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/index.js'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
    <Router />
     </BrowserRouter>
  </React.StrictMode>,
)
