import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Service from './components/Service';
import Bharat_sat from './components/Bharat_sat';
import Contact from './components/Contact';
import Join_us from './components/Join_us';
import Faq from './components/Faq'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Cancellation from './components/Cancellation'
import Registration from './components/Registration'
import Rewards from './components/Rewards'

function App() {
  return (
    <main className='page_content'>
      <Router>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Service" element={<Service/>}/>
              <Route path="/Bharat_Sat" element={<Bharat_sat/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/Join_Us" element={<Join_us/>}/>
              <Route path="/Faq" element={<Faq/>}/>
              <Route path="/Privacy-Policy" element={<Privacy/>}/>
              <Route path="/Terms-and-Conditions" element={<Terms/>}/>
              <Route path="/Cancellation-Policy" element={<Cancellation/>}/>
              <Route path="/Student-Registration" element={<Registration/>}/>
              <Route path="/Rewards" element={<Rewards/>}/>
          </Routes>
          <Footer/>
      </Router>
    </main>
  )
}

export default App
