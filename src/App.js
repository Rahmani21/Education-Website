import React from "react";
import {Navbar,Home,About, Course, Contact, Footer, Teacher} from './components/index'

function App() {
  return (
    <div className="font-Poppins bg-green-300">
    <Navbar />
    <Home />
    <About />
    <Course />
    <Teacher />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
