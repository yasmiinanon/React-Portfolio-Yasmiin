import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "./components/Navbar";
import Socials from "./components/socials";
import Footer from "./components/footer";
import { Home, Projects , Skills, Contact, Custom404 } from "./components/Pages";


function App() {
  return (
    <Router basename={"/React-Portfolio-Yasmiin"}>
      <div>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<Custom404 />} />
        </Routes>
        <Socials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;