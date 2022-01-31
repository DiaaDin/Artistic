import React from "react";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

const Input = styled.input`
  display: none;
`;

const Lable = styled.label`
  height: 30px;
  width: 65px;
  padding: 0 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  background: ${({theme}) => theme.light};
  border-radius: 50px;
  z-index: 1;

  &::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    left: 3.5px;
    height: 22px;
    width: 22px;
    background: var(--mediumSlateBlue);
    transition: transform 0.3s ease;
  }
  ${Input}:checked + &::after {
    transform: translate(160%, -50%);

  }
`;

const Icon = styled.div`
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.dark};;
`;

const Sun = styled(FiSun)``;

const Moon = styled(FiMoon)``;

const ThemeSwitcher = ({theme,toggleTheme}) => {

  return (
    <>
      <Input checked={theme === "light"} type="checkbox" id="switcher" onChange={toggleTheme} />
      <Lable htmlFor="switcher">
        <Icon>
          <Sun />
        </Icon>
        <Icon>
          <Moon />
        </Icon>
      </Lable>
    </>
  );
};

export default ThemeSwitcher;
