import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/index.js'
import { HashRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <HashRouter>
    <Router />
     </HashRouter>
  </React.StrictMode>,
)
