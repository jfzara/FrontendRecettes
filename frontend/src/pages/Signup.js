import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

// Styled component pour le formulaire
const StyledForm = styled.form`
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

// Styled component pour les champs de saisie
const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 16px;
`;

// Styled component pour le bouton de soumission
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: darkblue;
  }
`;

// Composant SignUp
const SignUp = () => {
  // États locaux pour stocker les valeurs des champs de saisie
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
    try {
      // Requête POST pour enregistrer un nouvel utilisateur
      const response = await api.post('/users/register', { username, password });
      console.log(response.data);
      toast.success('Inscription réussie !'); // Afficher un message de succès
      navigate('/login'); // Rediriger vers la page de login
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de l\'inscription'); // Afficher un message d'erreur
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <StyledInput
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <StyledInput
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <StyledButton type="submit">S'inscrire</StyledButton>
    </StyledForm>
  );
};

export default SignUp;
