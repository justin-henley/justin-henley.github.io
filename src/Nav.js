import React from "react";
import styled from "styled-components";
import { nav } from "./text";

const Nav = () => {
  let key = 0;
  return (
    <Wrapper>
      <Ul>
        {/* Generates all nav link buttons */}
        {Object.entries(nav).map(([it, val]) => {
          return (
            <Li key={`nav${key++}`}>
              <JumpLink href={val.jump}>{val.text}</JumpLink>
            </Li>
          );
        })}
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  margin: auto;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  min-width: 350px;
  justify-content: space-between;
`;

const Li = styled.li`
  text-decoration: none;
`;

const JumpLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  display: inline-block;
  border: none;
  text-decoration: none;

  &:hover {
    text-decoration: underline 1px;
  }
`;

export default Nav;
