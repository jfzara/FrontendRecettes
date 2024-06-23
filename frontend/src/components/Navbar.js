import React from 'react';
import styled from 'styled-components';
import AuthContext from '../components/AuthContext';

const StyledNavbar = styled.nav`
  width: 95%;
  height: 1.5rem;
  padding: 0.5rem;
  background-color: lightgrey;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRight = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem; 
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar className="navbar">
      <NavbarLeft>
        <span>Recette App</span>
      </NavbarLeft>
      <NavbarRight>
        <ul>
          <li><a href="/login">Connexion</a></li>
          <li><a href="/signup">Inscription</a></li>
        </ul>
      </NavbarRight>
    </StyledNavbar>
  );
};

export default Navbar;