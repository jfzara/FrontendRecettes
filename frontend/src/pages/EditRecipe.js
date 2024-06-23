import React from 'react';
import styled from 'styled-components';

const StyledEditForm = styled.div`
  max-width: 400px;
  margin: auto;
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

const StyledTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
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

const EditRecipe = () => {
  return (
    <StyledEditForm>
    <h2>Modifier la Recette</h2>
    <StyledForm>
      <StyledLabel htmlFor="title">Nom de la recette :</StyledLabel>
      <StyledInput type="text" id="title" value="Pizza" disabled />
  
      <StyledLabel htmlFor="ingredients">Ingrédients :</StyledLabel>
      <StyledTextarea id="ingredients" value="Tomate, Fromage, Pâte" disabled />
  
      <StyledLabel htmlFor="instructions">Instructions :</StyledLabel>
      <StyledTextarea id="instructions" value="1. Préchauffer le four à 220°C. 2. Étaler la pâte..." disabled />
  
      <StyledLabel htmlFor="category">Catégorie :</StyledLabel>
      <StyledSelect id="category" disabled>
        <option value="Plat" selected>Plat</option>
      </StyledSelect>
  
      <StyledLabel htmlFor="imageUrl">URL de l'image :</StyledLabel>
      <StyledInput type="text" id="imageUrl" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-YrEBAHHFG8fOs335Iu2p0KlTeDdHnhDlg&s" disabled />
  
      <StyledButton type="button">Modifier la Recette</StyledButton>
    </StyledForm>
  </StyledEditForm>
  );
};

export default EditRecipe;