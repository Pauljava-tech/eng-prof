import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from './protected_pages/adminPage.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
          <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
)
