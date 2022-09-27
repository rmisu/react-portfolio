import React, { useState } from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './components/Header';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  const [sections] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <div>
        <Header></Header>
        <Nav
          sections={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        ></Nav>
      </div>
      <main>
        {currentSection === sections[0] && <About></About>}
        {currentSection === sections[1] && <Portfolio></Portfolio>}
        {currentSection === sections[2] && <Contact></Contact>}
        {currentSection === sections[3] && <Resume></Resume>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
