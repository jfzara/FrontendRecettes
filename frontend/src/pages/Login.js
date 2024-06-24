import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../components/AuthContext';

const StyledLoginForm = styled.div`
  width: 300px;
  height: 250px;
  margin: auto; /* Centre le formulaire horizontalement */
  margin-top: 20px; /* Marge en haut du formulaire */
  padding: 20px;
  border: 1px solid lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre légère */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

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

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const isAuthenticated = login(username, password);
    if (isAuthenticated) {
      toast.success('Connecté avec succès!', {
        position: toast.POSITION.BOTTOM_CENTER, // Définit la position en bas au centre
        autoClose: 3000, // Ferme automatiquement après 3 secondes
      });
    } else {
      toast.error('Échec de la connexion', {
        position: toast.POSITION.BOTTOM_CENTER, // Définit la position en bas au centre
        autoClose: 3000, // Ferme automatiquement après 3 secondes
      });
    }
  };

  return (
    <StyledLoginForm>
      <h2>Connexion</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="username">Nom d'utilisateur:</StyledLabel>
        <StyledInput type="text" id="username" value={formData.username} onChange={handleChange} required />

        <StyledLabel htmlFor="password">Mot de passe:</StyledLabel>
        <StyledInput type="password" id="password" value={formData.password} onChange={handleChange} required />

        <StyledButton type="submit">Se connecter</StyledButton>
      </StyledForm>
      <ToastContainer position="bottom-center" /> {/* Positionne les toasts en bas au centre */}
    </StyledLoginForm>
  );
};

export default Login;