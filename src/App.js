import React from "react";
import "./CSS/main.css";
import Home from "./components/Home";
import Buttons from "./components/Buttons";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="inner container">
          <section>
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Certificates" element={<Certificates />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Contact" element={<Contact />} />
             </Routes>
          </section>
          <section>
            <Buttons />
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
