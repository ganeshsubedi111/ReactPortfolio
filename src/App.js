import React from "react";
import './index.css'
import Home from "./Component/Home";
import Project from "./Component/Project";
import About from "./Component/About";
import Contact from "./Component/Contact";

import {Routes,Route} from'react-router-dom'
function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/project" element={<Project />}/>
     
     <Route path="/about" element={<About />}/>
     <Route path="/contact" element={<Contact />}/>
    </Routes>

    </>
  );
}

export default App;
