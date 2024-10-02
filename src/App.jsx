import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Details from './Components/Details';
import Home from './Components/Home';

function App() {

  return (
    <>
     
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
   
    </Router>
    
    </>
  )
}

export default App
