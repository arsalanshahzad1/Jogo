import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LandingPage/>} />
      </Routes>
    </Router>

  )
}

export default App
