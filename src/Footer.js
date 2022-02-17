import React from "react";
import styled from "styled-components";
import { copyright, vars } from "./text";

const Footer = () => {
  /*   const date = new Date(); */
  return (
    <Wrapper>
      {/* &copy;{date.getFullYear()} */}
      <Link href={copyright.source}>{copyright.name}</Link>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin: 3em auto 1em auto;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${vars.textLight};
  font-weight: bold;

  &:hover {
    color: ${vars.textDark};
    text-decoration: underline;
  }
`;

export default Footer;
