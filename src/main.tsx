import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import Router from './router/index.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App /> 
    <Router />
  </React.StrictMode>,
)
