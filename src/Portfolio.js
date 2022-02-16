import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { projects } from "./text";

const Portfolio = () => {
  let key = 0;

  return (
    <Wrapper id="portfolio">
      <Title>Portfolio</Title>
      <Projects>
        {projects.map((project) => {
          return <Tile proj={project} key={`proj${key++}`} />;
        })}
      </Projects>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0 2em 0;
`;

const Title = styled.h2`
  font-size: 2em;
  padding: 0.5em;
`;

const Projects = styled.section`
  background-color: #fcfcfc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Portfolio;
