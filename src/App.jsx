import React from 'react'
import {useState} from 'react';

import styles from "./style";
import { Navbar, Title, Intro, Projects, Experience, Testimonials, Contact, Footer } from './components';

// import useDarkSide from "./hook/useDarkSide";
import Button from './components/Button';
import resume from './assets/resume.pdf';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  // const [colorTheme, setTheme] = useDarkSide();

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
    // setTheme(colorTheme)
  }

  return (
  <div className={`bg-primary w-full overflow-hidden ${darkMode ? "dark" : "light"}`}>
    <div className={`$styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          name="top"
        />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${darkMode ? "dark" : "light"}`}>
      <div className={`${styles.boxWidth} `}>
        <Title />
        <div className="xs:flex-row">
          <a href="#projects">
          <Button styles="mt-10 ml-10 rounded-[20px] hover:bg-purple-200" name="See my projects" gradient="bg-blue-gradient" />
          </a>
          
          <a href={resume} target="_blank" className="mr-10">
          <Button styles="xs:mt-10 ml-10 rounded-[20px]" name="Resume" gradient="bg-pink-gradient" />  
          </a>
        </div>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} ${darkMode ? "dark " : "light"}`}>
      <div className={`${styles.boxWidth}`}>
        <Intro />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>

  </div>
  )
};

export default App
