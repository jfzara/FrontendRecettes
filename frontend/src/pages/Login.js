import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

// Styles pour le formulaire de connexion
const StyledLoginForm = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

// Styles pour le formulaire
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Styles pour les étiquettes
const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

// Styles pour les champs de saisie
const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 16px;
`;

// Styles pour le bouton
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }
`;

// Composant Login pour se connecter à l'application
const Login = () => {
  const [username, setUsername] = useState(''); // État pour le nom d'utilisateur
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const { login } = useAuth(); // Récupérer la fonction login du contexte d'authentification
  const navigate = useNavigate(); // Utiliser pour naviguer après la connexion

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
    try {
      const response = await api.post('/users/login', { username, password });
      console.log(response.data); // Afficher la réponse de l'API dans la console
      login(); // Mettre à jour l'état d'authentification
      navigate('/recipes'); // Rediriger vers la liste des recettes après la connexion
    } catch (error) {
      console.error('Login failed:', error); // Afficher l'erreur en cas d'échec
    }
  };

  // Rendu du formulaire de connexion
  return (
    <StyledLoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="username">Username:</StyledLabel>
        <StyledInput
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </StyledLoginForm>
  );
};

export default Login; // Exporter le composant pour l'utiliser ailleurs
