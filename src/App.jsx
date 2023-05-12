import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PreSales from './pages/PreSales';


function App() {
const [state,setState] = useState("home")
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LandingPage state={state} setState={setState}/>} />
        <Route path='*' element={<LandingPage/>} />
        <Route path='/pre-sale'  element={<PreSales/>} />
      </Routes>
    </Router>

  )
}

export default App
