import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledSignupForm = styled.div`
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

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de l'inscription réussie avec les valeurs en dur
    if (formData.username === 'admin' && formData.password === 'password') {
      toast.success('Inscription réussie!');
      // Vous pouvez rediriger l'utilisateur ici ou afficher un message de succès
    } else {
      toast.error('Échec de l\'inscription');
    }
  };

  return (
    <StyledSignupForm>
      <ToastContainer />
      <h2>Inscription</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="username">Nom d'utilisateur:</StyledLabel>
        <StyledInput type="text" id="username" value={formData.username} onChange={handleChange} required />

        <StyledLabel htmlFor="password">Mot de passe:</StyledLabel>
        <StyledInput type="password" id="password" value={formData.password} onChange={handleChange} required />

        <StyledButton type="submit">S'inscrire</StyledButton>
      </StyledForm>
    </StyledSignupForm>
  );
};

export default Signup;