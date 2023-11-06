import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pet from './components/pet/pet.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/pets/new' element={<Pet/>}/>
    </Routes>
   
    </BrowserRouter>
,
)
