import React, { useContext } from 'react';
import styled from 'styled-components'; // Importation de styled-components pour la gestion du style CSS
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import AuthContext from '../components/AuthContext'; // Importation du contexte d'authentification

// Définition du style pour la barre de navigation
const StyledNavbar = styled.nav`
  width: 95%;
  height: 1.5rem;
  padding: 0.5rem;
  background-color: lightgrey;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Définition du style pour la partie gauche de la barre de navigation
const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

// Définition du style pour la partie droite de la barre de navigation
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

// Composant Navbar
const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext); // Récupère l'état d'authentification et la fonction de déconnexion du contexte d'authentification

  return (
    <StyledNavbar className="navbar"> 
      {/* Utilisation du style défini pour la barre de navigation */}
      <NavbarLeft>
        <span>Recette App</span> {/* Titre ou logo de l'application */}
      </NavbarLeft>
      <NavbarRight>
        <ul>
          {!isAuthenticated && ( // Si l'utilisateur n'est pas authentifié
            <>
              <li>
                <Link to="/login">Connexion</Link> {/* Lien vers la page de connexion */}
              </li>
              <li>
                <Link to="/signup">Inscription</Link> {/* Lien vers la page d'inscription */}
              </li>
            </>
          )}
          {isAuthenticated && ( // Si l'utilisateur est authentifié
            <li>
              <button onClick={logout}>Déconnexion</button> {/* Bouton de déconnexion */}
            </li>
          )}
        </ul>
      </NavbarRight>
    </StyledNavbar>
  );
};

export default Navbar; // Exportation du composant Navbar