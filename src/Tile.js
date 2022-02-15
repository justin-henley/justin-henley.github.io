import React from "react";
import styled from "styled-components";

// Receives an object containing the preview image, title, description, links to live and code
const Tile = ({ proj }) => {
  return (
    <StyledTile>
      <Preview>
        <img src={proj.img} alt="Preview image goes here" />
      </Preview>
      <Content>
        <Title>{proj?.title}</Title>
        <Description>{proj?.descrip}</Description>
        <Links>
          <Link href={proj?.live}>Live (logo)</Link>
          <Link href={proj?.code}>Code (logo)</Link>
        </Links>
      </Content>
    </StyledTile>
  );
};
const StyledTile = styled.article`
  width: 320px;
  height: 180px;
  border: 1px solid black;
  display: flex;
`;

const Preview = styled.div``;

const Content = styled.div``;

const Title = styled.header``;

const Description = styled.p``;

const Links = styled.div``;

const Link = styled.a``;

export default Tile;
