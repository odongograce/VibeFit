import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import ServiceDetails from './components/ServiceDetails';
import Dashboard from './components/Dashboard';
// import EquipmentShop from './components/EquipmentShop';
// import GroupWorkouts from './components/GroupWorkouts';
// import StrengthCardio from './components/StrengthCardio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceType" element={<ServiceDetails />} />

      {/* <Route path="/services/equipment" element={<EquipmentShop />} />
      <Route path="/services/group-workouts" element={<GroupWorkouts />} />
      <Route path="/services/strength-cardio" element={<StrengthCardio />} /> */}

      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
