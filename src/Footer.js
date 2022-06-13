import React from 'react';
import styled from 'styled-components';
import { copyright, vars } from './text';

const Footer = () => {
  /*   const date = new Date(); */
  return (
    <Wrapper>
      {/* &copy;{date.getFullYear()} */}
      <Link target="_blank" rel="noopener noreferrer" href={copyright.source}>
        {copyright.name}
      </Link>
      <br />
      <Link target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/kSC2OcpmW6rC/portfolio">
        Portfolio icon
      </Link>
      &nbsp;
      <Link target="_blank" rel="noopener noreferrer" href="https://icons8.com">
        by Icons8
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin: 3em auto 1em auto;
  text-align: center;
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
