import React from "react";
import { vars } from "./text";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const TileLinks = ({ proj }) => {
  return (
    <Links>
      {proj.live ? (
        <Link href={proj.live}>
          <StyledIcon icon={faArrowUpRightFromSquare} />
          <LinkText>Live</LinkText>
        </Link>
      ) : null}
      {proj.code ? (
        <Link href={proj.code}>
          <StyledIcon icon={faCode} />
          <LinkText>Code</LinkText>
        </Link>
      ) : null}
    </Links>
  );
};

const Icon = ({ className, children, icon }) => (
  <FontAwesomeIcon className={className} icon={icon}>
    {children}
  </FontAwesomeIcon>
);

const StyledIcon = styled(Icon)`
  font-size: 0.8em;
  margin-right: 0.2em;
`;

const Links = styled.div``;

const LinkText = styled.p`
  display: inline-block;
  vertical-align: middle;
`;

const Link = styled.a.attrs((props) => ({
  target: "blank",
  rel: "noopener noreferrer",
  href: props?.href,
}))`
  display: inline-block;
  text-decoration: none;
  /* border-radius: 5px 5px 5px 5px; */
  border: 1px solid ${vars.buttonBackground};
  transition: all 0.2s ease-in-out;
  padding: 0.25em;
  margin: 0.1em;
  color: ${vars.buttonBackground};
  background-color: ${vars.buttonText};

  &:hover {
    transform: scale(1);
    color: ${vars.buttonText};
    background-color: ${vars.buttonBackground};
  }
`;

export default TileLinks;
