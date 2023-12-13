import React from 'react'
import App from './App'
import './index.css'
import LoginForm from './components/login'
import { BrowserRouter as Router, Routes, Route, Navigate   } from 'react-router-dom';
import { createRoot } from 'react-dom';


const Root = () => {
  const isLoggedIn = false; // Set to true after successful login

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/App" /> : <LoginForm />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(<Root />);

