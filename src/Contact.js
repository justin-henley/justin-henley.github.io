import React from "react";
import styled from "styled-components";
import { vars, social } from "./text";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>Contact</Title>
      <Email href={social.email.link}>E-mail me</Email>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em auto 0 auto;
`;

const Title = styled.h2`
  font-size: 2em;
  padding: 0 0 0.5em 0;
  color: ${vars.textMedium};
`;

const Email = styled.a.attrs((props) => ({
  target: "_blank",
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

export default Contact;
