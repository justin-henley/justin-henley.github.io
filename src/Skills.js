import React from "react";
import styled from "styled-components";
import { skills, vars } from "./text";

const Skills = () => {
  let key = 0;
  return (
    <Wrapper id="skills">
      <Title>Skills</Title>

      <SkillBox>
        {skills.map((skill) => {
          return <Skill key={`skill${key++}`}>{skill}</Skill>;
        })}
      </SkillBox>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 400px;
  margin: 2em auto 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  padding: 0.5em;
  color: ${vars.textMedium};
`;

const SkillBox = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Skill = styled.li`
  background-color: white;
  padding: 5px;
  margin: 5px;
  font-size: 1.2em;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${vars.textMedium};

  &:hover {
    transform: scale(1.1);
    cursor: default;
  }
`;

export default Skills;
