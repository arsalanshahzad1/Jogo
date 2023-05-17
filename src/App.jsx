import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PreSales from './pages/PreSales';


function App() {
const [state,setState] = useState("home")
const [index, setIndex] = useState(0)
const [activeSection, setActiveSection] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path='/' exact 
        element={<LandingPage 
        state={state} 
        setState={setState}
        index={index} 
        setIndex={setIndex}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        />
        } />
        <Route path='/pre-sale'  element={<PreSales/>} />
      
        <Route path='*' element={<LandingPage/>} />
      </Routes>
    </Router>

  )
}

export default App
