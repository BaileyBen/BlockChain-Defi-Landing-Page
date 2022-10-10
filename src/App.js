import {React, useEffect, useState, createContext} from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {


 return (
<div >
<AuthContextProvider>
    <Router basename="/Crypto-Currency-Tracker-V2">
        <Routes>
<Navbar />
<Hero />
<About />
<Footer />
</Routes>
</Router>
    </AuthContextProvider>
</div>
 )
  
}
export default App;
