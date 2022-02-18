import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { social, resume, vars } from "./text";

const Links = () => {
  let key = 0;

  return (
    <Wrapper>
      {/* Resume Button */}
      <Resume href={resume.link}>
        <ResumeIcon icon={resume.faIcon} />
        {resume.linkText}
      </Resume>
      {/* Generates all social link buttons */}
      {Object.entries(social).map(([, val]) => {
        return (
          <Social key={`links${key++}`} href={val.link}>
            <StyledIcon icon={val.faIcon} />
          </Social>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 22em;
  align-items: center;
  background-color: white;
  color: black;
`;

const Resume = styled.a.attrs((props) => ({
  target: "blank",
  rel: "noopener noreferrer",
  href: props.href,
}))`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: ${vars.buttonBackground};
  color: white;
  font-size: 1.5em;
  padding: 0.5em;
  /*   border-radius: 2em 0 0 2em;
 */
  font-weight: 200;

  &:hover {
    /* transform: scale(0.9); */

    /* font-weight: 400; */
    text-decoration: underline;
  }
`;

const Social = styled.a.attrs((props) => ({
  target: "blank",
  rel: "noopener noreferrer",
  href: props.href,
}))`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export default Links;

const Icon = ({ className, children, icon }) => (
  <FontAwesomeIcon className={className} icon={icon}>
    {children}
  </FontAwesomeIcon>
);

const StyledIcon = styled(Icon)`
  margin: 5px;
  font-size: 2em;
  color: ${vars.textDark};

  &:hover {
    transform: scale(1.1);
  }
`;

const ResumeIcon = styled(Icon)`
  font-size: 0.7em;
  color: white;
  padding: 0 0.25em 0 0;
`;
