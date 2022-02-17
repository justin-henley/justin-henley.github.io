import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { vars } from "./text";
import TileLinks from "./TileLinks";

// Receives an object containing the preview image, title, description, links to live and code
const Tile = ({ proj }) => {
  let key = 1;
  return (
    <StyledTile>
      <Head>
        <Title>{proj?.title}</Title>
        <Tech>
          {proj.tech.map((item) => {
            return <TechItem key={`${proj.title}${item}`}>{item}</TechItem>;
          })}
        </Tech>
      </Head>
      <Description>{proj?.description}</Description>
      <TileLinks proj={proj} />
    </StyledTile>
  );
};

const Head = styled.header`
  margin: 0;
  text-align: center;
`;

const Title = styled.h3`
  display: block;
  font-size: 1.5em;
  color: ${vars.textDark};
`;

const Tech = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
`;

const TechItem = styled.li`
  font-size: 0.8em;
  margin: 0 10px 0 10px;
  color: ${vars.textLight};
`;

const Description = styled.p`
  color: ${vars.textMedium};
`;

const StyledTile = styled.article`
  width: 100%;
  height: 12em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* border-radius: 5px; */
  padding: 1em;
  margin: 1em;
  background-color: white;
  box-shadow: 0 5px 10px gray;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

export default Tile;
