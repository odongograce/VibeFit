import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({name:"Guest"});
  const [mood, setMood] = useState('');
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);

  
  useEffect(() => {
    fetch(`http://localhost:3002/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      
  }, [id]);

 
  useEffect(() => {
    fetch('http://localhost:3002/workouts')
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);


  const handleGeneratePlan = () => {
    if (!mood) return alert('Please select your mood first!');
    const filtered = workouts.filter((w) => w.mood === mood);
    setFilteredWorkouts(filtered);
  };



  return (
    <div className='Dashboard'>
      <div className="container py-4">
      <div className="text-center mb-6">
        <h2 className="fw-bold text-primary">Welcome, {user.name}</h2>
        <p className="text-muted">Let's find the right workout for your mood today.</p>
      </div>

    
      <div className="text-center mb-5">
        <select
          className="form-select w-50 mx-auto mb-3"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="">Select your mood</option>
          <option value="energized">Energized</option>
          <option value="tired">Tired</option>
          <option value="stressed">Stressed</option>
          <option value="happy">Happy</option>
        </select>
        <button className="btn btn-primary fw-semibold" onClick={handleGeneratePlan}>
          Get My Workout Plan
        </button>
      </div>

    
      <div className="row g-4">
  {filteredWorkouts.map((w) => (
    <div className="col-md-4" key={w.id}>
      <div className="card shadow-sm p-5 border-0 rounded-4">
        <h5 className="fw-bold text-primary">{w.title}</h5>
        <p className="text-muted small mb-3">{w.description}</p>
      </div>
    </div>
  ))}
</div>


 
      <div className="text-center mt-5">
        <button onClick={() => navigate('/')} className="btn btn-primary fw-semibold">
          Logout
        </button>
      </div>
    </div>
    </div>
  );
}
