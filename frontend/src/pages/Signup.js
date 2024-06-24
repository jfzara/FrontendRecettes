import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledSignupForm = styled.div`
  width: 300px;
  height: 300px;
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

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 80px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  margin-top: -100px; /* Ajuste la position verticale */
`;

const IconCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const SuccessIcon = styled(IconCircle)`
  background-color: green;
  color: white;
`;

const ErrorIcon = styled(IconCircle)`
  background-color: red;
  color: white;
`;

const PopupContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const BottomBorder = styled.div`
  height: 5px;
  background: linear-gradient(to right, green 75%, lightgreen 25%);
`;

const ErrorPopupContainer = styled(PopupContainer)`
  border-color: red;
  margin-top: 20px; /* Ajuste la position verticale */
`;

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'une inscription réussie avec les valeurs en dur
    if (formData.username === 'admin' && formData.password === 'password') {
      setShowSuccessPopup(true);
      setShowErrorPopup(false);
      toast.success('Inscription réussie!', {
        position: toast.POSITION.BOTTOM_CENTER, // Définit la position en bas au centre
        autoClose: 3000, // Ferme automatiquement après 3 secondes
      });
    } else {
      setShowSuccessPopup(false);
      setShowErrorPopup(true);
      toast.error('Échec de l\'inscription', {
        position: toast.POSITION.BOTTOM_CENTER, // Définit la position en bas au centre
        autoClose: 3000, // Ferme automatiquement après 3 secondes
      });
    }
  };

  return (
    <StyledSignupForm>
      <h2>Inscription</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="username">Nom d'utilisateur:</StyledLabel>
        <StyledInput type="text" id="username" value={formData.username} onChange={handleChange} required />

        <StyledLabel htmlFor="password">Mot de passe:</StyledLabel>
        <StyledInput type="password" id="password" value={formData.password} onChange={handleChange} required />

        <StyledButton type="submit">S'inscrire</StyledButton>
      </StyledForm>

      {showSuccessPopup && (
        <PopupContainer>
          <PopupContent>
            <SuccessIcon>✔</SuccessIcon>
            <span>Inscription réussie!</span>
            <CloseButton onClick={() => setShowSuccessPopup(false)}>&times;</CloseButton>
          </PopupContent>
          <BottomBorder />
        </PopupContainer>
      )}

      {showErrorPopup && (
        <ErrorPopupContainer>
          <PopupContent>
            <ErrorIcon>!</ErrorIcon>
            <span>Échec de l'inscription</span>
            <CloseButton onClick={() => setShowErrorPopup(false)}>&times;</CloseButton>
          </PopupContent>
          <BottomBorder style={{ background: 'linear-gradient(to right, red 75%, lightcoral 25%)' }} />
        </ErrorPopupContainer>
      )}

      <ToastContainer position="bottom-center" /> {/* Positionne les toasts en bas au centre */}
    </StyledSignupForm>
  );
};

export default Signup;