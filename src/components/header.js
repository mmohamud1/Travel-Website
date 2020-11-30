import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <NavLink to='/'>Mo-Travel</NavLink>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const NavLink = styled(Link)``;
