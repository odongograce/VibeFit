import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3002/users?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        const user = data[0];
        if (!user) {
          setError('User not found');
        } else if (user.password !== password) {
          setError('Invalid password');
        } else {
          alert(`Welcome, ${user.name}!`);
          
          navigate(`/dashboard/${user.id}`);
        }
      })
   
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center">
      <div
        className="card shadow-lg p-4 rounded-4"
        style={{ maxWidth: '420px', width: '100%' }}
      >
        <h2 className="text-center fw-bold text-primary mb-3">Welcome Back</h2>
        <p className="text-center text-muted mb-4">
          Log in to continue your fitness journey
        </p>

        <form onSubmit={handleLogin}>
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
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold"
          >
            Login
          </button>

          <p className="text-danger text-center mt-3">{error}</p>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{' '}
          <span
            className="text-accent fw-bold"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/register')}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
