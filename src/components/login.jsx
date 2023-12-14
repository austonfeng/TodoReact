import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { v4 as uuid } from "uuid";
import { validateCredentials } from './authUtils'; 

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
      if (validateCredentials(username, password)) {
        navigate('/App');
      } else {
        console.log('Invalid credentials');
      }

  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            className='input1'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label id='st'>Username</label>
        </div>
        <div className="user-box">
          <input
            className='input1'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label id='nd'>Password</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
