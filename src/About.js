import React from "react";
import styled from "styled-components";
import Links from "./Links";
import { about, vars } from "./text";

const About = () => {
  return (
    <Wrapper id="about">
      <Headline>{about.headline}</Headline>
      <Sub>{about.sub}</Sub>
      <Blurb>{about.blurb}</Blurb>
      <Links />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 80%;
  height: 20em;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;

  @media only screen and (min-width: 768px) {
    align-items: center;
  }
`;

const Headline = styled.h1`
  font-size: 2.5em;
  color: ${vars.primary};
`;

const Sub = styled.h2`
  font-size: 2em;
`;

const Blurb = styled.p``;

export default About;
