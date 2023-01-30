import React from "react";
import Main from "../Main";
import Homepage from "../pages/Homepage";
import Menu from "../pages/Menu";
import Special from "../pages/Special";
import Contact from "../pages/Contact";
import About from "../pages/About";
const LandingPages = () => {
  return (
    <Main>
      <Homepage />
      <Menu />
      <Special />
      <Contact />
      <About />
    </Main>
  );
};

export default LandingPages;
