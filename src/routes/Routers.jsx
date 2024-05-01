import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default Routers