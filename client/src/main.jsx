import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pet from './components/pet/pet.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pets from './components/Pets/Pets.jsx'
import Details from './components/Details/Details.jsx'
import Edit from './components/edit/Edit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/pets/new' element={<Pet/>}/>
      <Route path='/show/pets' element={<Pets/>} />
      <Route path='/pet/:id' element={<Details/>}/>
      <Route path='/pet/e/edit/:id's element={<Edit/>} />
    </Routes>
   
    </BrowserRouter>
,
)
