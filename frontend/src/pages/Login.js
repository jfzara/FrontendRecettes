import React, { useState } from 'react'; // Importation de React et du hook useState
import styled from 'styled-components'; // Importation de styled-components pour la gestion des styles
import { toast, ToastContainer } from 'react-toastify'; // Importation de react-toastify pour les notifications
import 'react-toastify/dist/ReactToastify.css'; // Importation du CSS de react-toastify
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP

// Définition du style pour le conteneur du formulaire de connexion
const StyledLoginForm = styled.div`
  width: 300px;
  height: 250px;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Définition du style pour le formulaire
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Définition du style pour les labels
const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

// Définition du style pour les inputs
const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

// Définition du style pour les boutons
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

// Composant Login
const Login = () => {
  // État local pour stocker les données du formulaire
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value }); // Mise à jour de l'état avec les nouvelles valeurs
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', formData); // Envoi d'une requête POST au backend avec les données du formulaire
      console.log(response.data); // Affichage de la réponse du backend si nécessaire
      toast.success('Connexion réussie!'); // Notification de succès
      // Redirection ou message de succès ici
    } catch (error) {
      console.error('Erreur lors de la connexion :', error); // Affichage de l'erreur dans la console
      toast.error('Échec de la connexion'); // Notification d'échec
    }
  };

  return (
    <StyledLoginForm>
      <ToastContainer /> {/* Conteneur pour les notifications */}
      <h2>Connexion</h2>
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

        <StyledButton type="submit">Se connecter</StyledButton>
      </StyledForm>
    </StyledLoginForm>
  );
};

export default Login; // Exportation du composant Login