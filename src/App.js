import React from 'react'
import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Partials/Footer";
import Navbar from "./Components/Partials/Navbar";
import './App.css';
import Content from "./Components/Pages/HomeContent";
import AboutContent from "./Components/Pages/AboutContent";
import ContactContent from "./Components/Pages/ContactContent";
import Blog from './Components/Pages/Blog';
function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route index element={<Content />} />
          <Route path="about-us" element={<AboutContent />} />
          <Route path="contact-us" element={<ContactContent />} />
          <Route path="blog/:id" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );

}
export default App;