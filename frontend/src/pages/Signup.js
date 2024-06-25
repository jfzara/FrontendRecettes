import React, { useState } from 'react'; // Importation de React et useState pour gérer l'état local
import styled from 'styled-components'; // Importation de styled-components pour les styles des composants
import { toast, ToastContainer } from 'react-toastify'; // Importation de toast et ToastContainer pour les notifications
import 'react-toastify/dist/ReactToastify.css'; // Importation des styles de react-toastify
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP

// Définition des styles pour le formulaire d'inscription
const StyledSignupForm = styled.div`
  width: 300px;
  height: 250px;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Définition des styles pour le formulaire
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Définition des styles pour les étiquettes des champs
const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

// Définition des styles pour les champs de saisie
const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

// Définition des styles pour le bouton de soumission
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

// Composant Signup pour le formulaire d'inscription
const Signup = () => {
  // Définition de l'état local pour les données du formulaire
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Gestion des changements dans les champs de saisie
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire

    try {
      // Envoyer les données du formulaire au serveur pour l'inscription
      const response = await axios.post('http://localhost:3000/api/users/register', formData);
      console.log(response.data); // Afficher la réponse du serveur si nécessaire
      toast.success('Inscription réussie!'); // Afficher une notification de succès
      // Redirection ou message de succès ici
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      toast.error('Échec de l\'inscription'); // Afficher une notification d'échec
    }
  };

  // Rendu du formulaire d'inscription
  return (
    <StyledSignupForm>
      <ToastContainer /> {/* Conteneur pour les notifications */}
      <h2>Inscription</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="username">Nom d'utilisateur:</StyledLabel>
        <StyledInput
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <StyledLabel htmlFor="password">Mot de passe:</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <StyledButton type="submit">S'inscrire</StyledButton>
      </StyledForm>
    </StyledSignupForm>
  );
};

export default Signup; // Exportation du composant Signup