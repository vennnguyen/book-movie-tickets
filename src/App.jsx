import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeTemplate Component={Home} />} />
        <Route path="/" element={<HomeTemplate Component={Home} />} />
        <Route path="/news" element={<HomeTemplate Component={News} />} />
        <Route path="/contact" element={<HomeTemplate Component={Contact} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
