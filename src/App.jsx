import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Pages/Home";
import NavBar from "./components/Navbar";
import Projects from "./components/Pages/Projects";
import Skills from "./components/Pages/Skills";
import Contact from "./components/Pages/Contact";
import Socials from "./components/socials";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Socials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;