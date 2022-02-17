import React from "react";
import styled from "styled-components";
import Links from "./Links";
import { about, vars } from "./text";

const About = () => {
  return (
    <Wrapper id="about">
      <div>
        <Headline>{about.headline}</Headline>
        <Sub>{about.sub}</Sub>
      </div>
      <Blurb>{about.blurb}</Blurb>
      <Links />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  height: 20em;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3em 0 3em 0;

  @media only screen and (min-width: 768px) {
    align-items: center;
  }
`;

const Headline = styled.h1`
  font-size: 2.5em;
  color: ${vars.headline};
  /* padding: 1em 0 2em 0; */
`;

const Sub = styled.h2`
  font-size: 2em;
  color: ${vars.textDark};
`;

const Blurb = styled.p`
  color: ${vars.textMedium};
`;

export default About;
