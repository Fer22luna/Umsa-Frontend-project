import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/index.js'
import { BrowserRouter } from 'react-router-dom'
import ResponsiveAppBar from './Components/navbar/navbar'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
     <BrowserRouter>
     <ResponsiveAppBar/>
    <Router />
     </BrowserRouter>
 
)
