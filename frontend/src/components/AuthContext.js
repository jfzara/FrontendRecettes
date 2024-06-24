import React, { createContext, useState } from 'react';

// Création du contexte d'authentification
const AuthContext = createContext();

// Fonction de fournisseur d'authentification (provider)
export const AuthProvider = ({ children }) => {
  // État d'authentification initial (exemple simplifié)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fonction de connexion
  const login = (username, password) => {
    // Logique d'authentification (exemple simplifié)
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Contexte fournit la valeur aux composants enfants
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;