import React, { useState } from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
//import Header from './components/Header';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  const [tabs] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
    <Nav
      tabs={tabs}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
    ></Nav>
    <main>
    {currentTab.name === 'About Me' ? (
       <About />
    ) :
    currentTab.name === 'Portfolio' ? (
       <Portfolio currentTab={currentTab}></Portfolio>
    ) :
    currentTab.name === 'Contact' ? (
       <Contact />
    ) :
    currentTab.name === 'Resume' ? (
      <Resume />
   ) :
    <></>
    }
    </main>
    <Footer />
  </div>
  );
}

export default App;
