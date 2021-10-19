// components
import NavBar from "./components/NavBar";
import Social from "./components/Social";
import About from "./components/About";
import Footer from "./components/Footer";

import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";

export const ThemeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [scrollValue, setScrollValue] = useState(0);

  //let scrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    setScrollValue(window.scrollY);
  });
  const moveSuperSlow = scrollValue;
  const moveSlow = scrollValue * 1.6;
  const moveFast = scrollValue * 2.5;
  const moveSiperFast = scrollValue * 7;

  useEffect(() => {
    // check if the location ( x value ) of the ball is greater then the size of
    //the screen and if it does reimove it
    // and if it doesnt any more its set it to normal

    if (moveFast < window.screen.width) {
      document.querySelector("#circulToRight").style.top = `${moveSuperSlow}px`;
      document.querySelector("#circulToRight").style.left = `${moveFast}px`;
    }
    if (moveFast > window.screen.width) {
      document.querySelector("#circulToRight").style.width = "0px";
      document.querySelector("#circulToRight").style.height = "0px";
    } else if (moveFast < window.screen.width) {
      document.querySelector("#circulToRight").style.width = "150px";
      document.querySelector("#circulToRight").style.height = "150px";
    }

    document.querySelector("#circulUp").style.top = `${moveSlow}px`;
    document.querySelector(
      "#circulUp"
    ).style.transform = `rotate(${moveSuperSlow}deg)`;

    document.querySelector(
      "#circulToRight"
    ).style.transform = `rotate(${moveSuperSlow}deg)`;
  }, [scrollValue]);

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <ThemeContext.Provider value={isDarkMode}>
        <div className={isDarkMode ? "DarkApp" : "App"}>
          <header className="App-header">
            <NavBar darkMode={isDarkMode} callback={setIsDarkMode} />
          </header>
          <div className="">
            <div
              id="circulUp"
              className={isDarkMode ? "dark-circulUp" : "circulUp"}
            ></div>
            <div
              id="circulToRight"
              className={isDarkMode ? "dark-circulToRight" : "circulToRight"}
            ></div>
          </div>
          <main>
            <Social />
            <About />
            <Projects />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
