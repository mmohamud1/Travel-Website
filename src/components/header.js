import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Header = () => {
  return (
    <Nav>
      <NavLink to='/'>Mo-Travel</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((menu, index) => (
          <NavLinkTwo to={menu.link} key={index}>
            {menu.title}
          </NavLinkTwo>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary='true' round='true' to='/trips'>
          book a flight
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const NavLink = styled(Link)`
  font-family: 'Permanent Marker', cursive;
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const NavLinkTwo = styled(Link)`
  font-family: 'Roboto', sans-serif;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #a679d2;
    transition: 0.3s ease-out;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
