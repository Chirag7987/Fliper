import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';  // Import Footer component
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chart" element={<ChartSection />} />
      </Routes>
      <Footer />  {/* Add Footer component */}
    </Router>
  );
}

export default App;
