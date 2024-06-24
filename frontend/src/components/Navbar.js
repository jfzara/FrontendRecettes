import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  const { isAuthenticated, logout } = useContext(AuthContext); // Récupère l'état d'authentification

  return (
    <StyledNavbar className="navbar">
      <NavbarLeft>
        <span>Recette App</span>
      </NavbarLeft>
      <NavbarRight>
        <ul>
          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Connexion</Link>
              </li>
              <li>
                <Link to="/signup">Inscription</Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={logout}>Déconnexion</button>
            </li>
          )}
        </ul>
      </NavbarRight>

    </StyledNavbar>
  );
};

export default Navbar;