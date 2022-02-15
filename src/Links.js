import React from "react";
import styled from "styled-components";
import { social, resume } from "./text";

const Links = () => {
  let key = 0;
  return (
    <Wrapper>
      {/* Resume Button */}
      <Resume href={resume.link}>{resume.linkText}</Resume>
      {/* Generates all social link buttons */}
      {Object.entries(social).map(([it, val]) => {
        return (
          <Social key={`links${key++}`} href={val.link}>
            {val.icon}
            {val.linkText}
          </Social>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Resume = styled.a.attrs((props) => ({
  target: "blank",
  rel: "noopener noreferrer",
  href: props.href,
}))`
  display: inline-block;
  border: 1px solid black;
`;

const Social = styled.a.attrs((props) => ({
  target: "blank",
  rel: "noopener noreferrer",
  href: props.href,
}))`
  display: inline-block;
  border: 1px solid black;
`;

export default Links;
