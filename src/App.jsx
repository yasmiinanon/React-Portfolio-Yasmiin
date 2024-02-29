import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Projects, Skills, Contact } from "./components/Pages";
import { Socials, Footer, NavBar } from "./components";


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
        </Routes>
        <Socials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;