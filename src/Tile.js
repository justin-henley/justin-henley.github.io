import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

// Receives an object containing the preview image, title, description, links to live and code
const Tile = ({ proj }) => {
  return (
    <StyledTile>
      <Preview src={proj.img} alt="Preview image goes here" />

      <Content>
        <Title>{proj?.title}</Title>
        <Description>{proj?.description}</Description>
        <Links>
          <Link
            href={proj?.live}
            bgColor="maroon"
            color="white"
            hoverColor=""
            hoverBgColor=""
          >
            <StyledIcon icon={faArrowUpRightFromSquare} />
            <LinkText>Live</LinkText>
          </Link>
          <Link
            href={proj?.code}
            bgColor="green"
            color="white"
            hoverColor=""
            hoverBgColor=""
          >
            <StyledIcon icon={faCode} />
            <LinkText>Code</LinkText>
          </Link>
        </Links>
      </Content>
    </StyledTile>
  );
};
const StyledTile = styled.article`
  width: 100%;
  height: 12em;

  display: flex;
  /* border-radius: 5px; */
  padding: 10px;
  margin: 0.1em;
  background-color: white;
  box-shadow: 0 5px 10px gray;

  @media only screen and (min-width: 768px) {
    width: 20em;
  }
`;

const Image = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
);

const Preview = styled(Image)`
  display: block;
  background-color: darkgray;
  margin-right: 0.5em;
  border-radius: 5px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  display: block;
  font-size: 1.5em;
`;

const Description = styled.p``;

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
  color: ${(props) => props?.color};
  background-color: ${(props) => props?.bgColor};
  border-radius: 5px 5px 5px 5px;
  transition: all 0.2s ease-in-out;
  padding: 0.25em;
  margin: 0.1em;

  &:hover {
    color: ${(props) => props?.hoverColor};
    background-color: ${(props) => props?.hoverBgColor};
    transform: scale(1.2);
  }
`;

const Icon = ({ className, children, icon }) => (
  <FontAwesomeIcon className={className} icon={icon}>
    {children}
  </FontAwesomeIcon>
);

const StyledIcon = styled(Icon)``;

export default Tile;
