import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import styled from "styled-components";

const Content = () => {
  return (
    <main>
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
};

const Main = styled.main``;

export default Content;
