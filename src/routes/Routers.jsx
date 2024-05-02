import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Players from '../pages/Players';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About/>} />
      <Route path="/players" element={<Players/>} />
    </Routes>
  )
}

export default Routers