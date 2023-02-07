import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vehicle from './pages/Vehicle';
import Home from './pages/Home';
import Parking from './pages/Parking';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/vehicle" element={<Vehicle />} />
        <Route path="/dashboard/parking" element={<Parking />} />
        <Route path="/dashboard/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
