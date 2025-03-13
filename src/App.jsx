import React from "react";
import Navbar from "./component/Navbar"; // Import Navbar from the correct path
import Hero from "./component/Hero"; // Import Hero from the correct path
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
const App = () => {
  return (
    <main className="bg-slate-700">
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Contact/>
    </main>
  );
};

export default App;
