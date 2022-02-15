import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const Portfolio = () => {
  // Add portfolio details either here or as a separate file to import
  const testProj = {
    img: "",
    title: "Test Proj",
    descrip: "Lorem ipsum blah blum blur",
    live: "https://www.google.com",
    code: "https://www.github.com",
  };
  return (
    <Wrapper>
      <Tile proj={testProj} />
      <Tile proj={testProj} />
      <Tile proj={testProj} />
      <Tile proj={testProj} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: lightgray;
  display: flex;
  flex-wrap: wrap;
`;

export default Portfolio;
