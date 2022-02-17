import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
/* import { about } from "./text"; */

const Header = () => {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;

export default Header;
