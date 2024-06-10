import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router

import "./index.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    history.push('/characters');
  };


  return (
    <div className="login-form-container">
         <img src="https://www.mobilefirst.in/images/MobileFirstApplications_Logo.jpg"  className="login-website-logo-desktop-img" alt="website logo" />
       
      <form className="form-container" onSubmit={handleLogin}>
        <img src="https://www.mobilefirst.in/images/MobileFirstApplications_Logo.jpg"  className="login-website-logo-mobile-img" alt="website logo" />
        <div className='input-container'>
            <label className="input-label" htmlFor="username">USERNAME</label>
            <input id='username' className="password-input-field" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />       
            </div>
            <div className='input-container'>
            <label className="input-label" htmlFor="password">PASSWORD</label>
            <input id='password' type="password" className="username-input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
       <button className="login-button" type="submit">Login</button>
       <button className="login-button" type="button" onClick={handleLogin}>Skip</button>
      </form>
    </div>
  );
};

export default Login;

