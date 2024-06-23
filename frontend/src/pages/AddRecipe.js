import React from 'react';
import styled from 'styled-components';

const StyledAddRecipeForm = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const StyledTextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  resize: vertical;
`;

const StyledSelect = styled.select`
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

const AddRecipe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <>
      <StyledAddRecipeForm>
        <h2>Ajouter une recette</h2>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="recipeName">Nom recette:</StyledLabel>
          <StyledInput type="text" id="recipeName" required />

          <StyledLabel htmlFor="ingredients">Ingrédients:</StyledLabel>
          <StyledTextArea id="ingredients" rows="4" required />

          <StyledLabel htmlFor="instructions">Instructions:</StyledLabel>
          <StyledTextArea id="instructions" rows="4" required />

          <StyledLabel htmlFor="category">Catégorie:</StyledLabel>
          <StyledSelect id="category" required>
            <option value="" disabled selected>Choisir catégorie</option>
            <option value="entrée">Entrée</option>
            <option value="plat">Plat</option>
            <option value="dessert">Dessert</option>
            <option value="boisson">Boisson</option>
            <option value="autre">Autre</option>
          </StyledSelect>

          <StyledLabel htmlFor="imageUrl">Image URL:</StyledLabel>
          <StyledInput type="text" id="imageUrl" />

          <StyledButton type="submit">Ajouter recette</StyledButton>
        </StyledForm>
      </StyledAddRecipeForm>
    </>
  );
};

export default AddRecipe;