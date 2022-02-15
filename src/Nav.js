import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <ul>
        <StyledLi>About</StyledLi>
        <StyledLi>Portfolio</StyledLi>
        <StyledLi>Skills</StyledLi>
        <StyledLi>Resume</StyledLi>
        <StyledLi>Contact</StyledLi>
      </ul>
    </div>
  );
};

const Li = ({ className, children }) => (
  <StyledLi className={className}>{children}</StyledLi>
);

const StyledLi = styled(Li)`
  color: blue;
`;

export default Nav;
