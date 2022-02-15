import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const Portfolio = () => {
  // Add portfolio details either here or as a separate file to import
  const testProj = {
    img: "",
    title: "Cycle TW",
    descrip: "Lorem ipsum blah blum blur",
    live: "https://www.google.com",
    code: "https://www.github.com",
  };
  return (
    <Wrapper id="portfolio">
      <Title>Portfolio</Title>
      <Projects>
        <Tile proj={testProj} />
        <Tile proj={testProj} />
      </Projects>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2``;

const Projects = styled.section`
  background-color: #fcfcfc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Portfolio;
