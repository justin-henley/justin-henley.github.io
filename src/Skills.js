import React from "react";
import styled from "styled-components";
import { skills } from "./text";

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
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const SkillBox = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Skill = styled.li`
  background-color: papayawhip;
  padding: 5px;
  margin: 5px;
`;

export default Skills;
