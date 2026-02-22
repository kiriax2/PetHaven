import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Login from './Login';
import SignUp from './SignUp';
import Adoption from './Adoption';
import AdoptionForm from './AdoptionForm';
import Release from './Release';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.username) {
      setIsLoggedIn(true);
      setUsername(savedUser.username);
    }
  }, []);

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.username) {
      setIsLoggedIn(true);
      setUsername(savedUser.username);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adoption" element={<Adoption isLoggedIn={isLoggedIn} />} />
        <Route path="/adopt-form" element={<AdoptionForm />} />
        <Route path="/release" element={<Release isLoggedIn={isLoggedIn} />} />

      </Routes>
    </Router>
  );
}

export default App;
