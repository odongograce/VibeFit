import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3002/users?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          setMessage('User already exists');
        } else {
          const newUser = { name, email, password };

          fetch('http://localhost:3002/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
          }).then(() => {
            setMessage('Registration successful! Redirecting...');
            setTimeout(() => navigate('/login'), 1500);
          });
        }
      });
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: '420px', width: '100%' }}>
        <h2 className="text-center fw-bold text-primary mb-3">Create an Account</h2>
        <p className="text-center text-muted mb-4">Join the VibeFit community today</p>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
            Register
          </button>
        </form>

       <p className="text-center mt-3 text-success">{message}</p>

        <p className="text-center mt-4">
          Already have an account?
          <span
            className="text-primary fw-bold"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
