import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import People from './pages/People/People';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import InfraAcademic from './pages/Infrastructure/InfraAcademic';
import InfraOther from './pages/Infrastructure/InfraOther';
import InfraResidence from './pages/Infrastructure/InfraResidence';
import Gallery from './pages/Gallery/Gallery';
import Phases from './pages/Phases/Phases';
import './App.css'

function AppContent() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/people' exact element={<People />} />
        <Route path='/infrastructure' exact element={<Infrastructure />} />
        <Route path='/infrastructure/academic' exact element={<InfraAcademic />} />
        <Route path='/infrastructure/others' exact element={<InfraOther />} />
        <Route path='/infrastructure/residence' exact element={<InfraResidence />} />
        <Route path='/gallery' exact element={<Gallery />} />
        <Route path='/phases' exact element={<Phases />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
