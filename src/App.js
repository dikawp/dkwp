import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Main } from "./components/main";
import {Introduc} from "./components/intro"
import { Skills } from "./components/skill";
import { Porto } from "./components/porto";
import { Footer } from "./components/footer";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className='dark:text-white transition duration-500 ease-in-out dark:bg-slate-900 overflow-hidden'>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Main/>
      <Introduc/>
      <Skills/>
      <Porto/>
      <Footer/>
    </div>
  );
}

export default App;