import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const validatePassword = (pwd) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(pwd);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setMessage('❌ Password must be at least 8 characters, include 1 uppercase and 1 number.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((u) => u.username === username)) {
      setMessage('⚠️ Username already exists.');
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    setMessage(`✅ Account created for ${username}! You can now log in.`);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

        <button type="submit">Sign Up</button>
      </form>

      {message && (
        <p className={message.startsWith('✅') ? 'success' : 'error'}>{message}</p>
      )}
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default SignUp;
