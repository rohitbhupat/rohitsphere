import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certification />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
