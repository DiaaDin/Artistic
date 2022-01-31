import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.dark};
  transition: background-color .3s ease;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Logo = styled.img`
  max-width: 100px;
`;

const Links = styled.ul`
  display: flex;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 80%;
    max-width: 2500px;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
    background-color: ${({ theme }) => theme.dark};
    height: 100vh;
    z-index: 1000;
    transition: right 0.3s ease;
  }
`;
const LinkItem = styled(Link)`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.light};

  @media only screen and (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 1rem 0.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.light};
  }
  &:hover {
    opacity: 0.7;
  }
`;

const Menu = styled(FaBars)``;

const Times = styled(FaTimes)``;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CloseIcon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 3rem;
    color: ${({ theme }) => theme.light};
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    color: ${({ theme }) => theme.light};
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainHeader>
      <Container>
        <Nav>
          <Logo src={logo} />
          <LinksContainer>
            <Links isOpen={isOpen}>
              <CloseIcon>
                <Times onClick={toggle} />
              </CloseIcon>
              <LinkItem onClick={toggle} to="Hero" smooth>
                Home
              </LinkItem>
              <LinkItem onClick={toggle} to="Services" smooth>
                Services
              </LinkItem>
              <LinkItem onClick={toggle} to="About" smooth>
                About
              </LinkItem>
              <LinkItem onClick={toggle} to="Team" smooth>
                Team
              </LinkItem>
              <LinkItem onClick={toggle} to="Contact" smooth>
                Contact
              </LinkItem>
            </Links>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <Icon>
              <Menu onClick={toggle} />
            </Icon>
          </LinksContainer>
        </Nav>
      </Container>
    </MainHeader>
  );
};

export default Header;
