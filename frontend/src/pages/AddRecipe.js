import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

const StyledAddRecipeForm = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 8px;
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

const AddRecipe = ({ recipes, setRecipes }) => {
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecipeData({ ...recipeData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...recipeData, id: recipes.length + 1 };
    setRecipes([...recipes, newRecipe]);
    console.log('Nouvelle recette ajoutée:', newRecipe);
    // Réinitialiser le formulaire
    setRecipeData({
      recipeName: '',
      ingredients: '',
      instructions: '',
      category: '',
      imageUrl: '',
    });
    setSubmitted(true);
  };

  if (submitted) {
    return <Navigate to="/RecipeList" />;
  }

  return (
    <StyledAddRecipeForm>
      <h2>Ajouter une recette</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="recipeName">Nom recette:</StyledLabel>
        <StyledInput
          type="text"
          id="recipeName"
          value={recipeData.recipeName}
          onChange={handleChange}
          required
        />

        <StyledLabel htmlFor="ingredients">Ingrédients:</StyledLabel>
        <StyledTextArea
          id="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
          rows="4"
          required
        />

        <StyledLabel htmlFor="instructions">Instructions:</StyledLabel>
        <StyledTextArea
          id="instructions"
          value={recipeData.instructions}
          onChange={handleChange}
          rows="4"
          required
        />

        <StyledLabel htmlFor="category">Catégorie:</StyledLabel>
        <StyledSelect
          id="category"
          value={recipeData.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Choisir catégorie</option>
          <option value="entrée">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
          <option value="boisson">Boisson</option>
          <option value="autre">Autre</option>
        </StyledSelect>

        <StyledLabel htmlFor="imageUrl">Image URL:</StyledLabel>
        <StyledInput
          type="text"
          id="imageUrl"
          value={recipeData.imageUrl}
          onChange={handleChange}
        />

        <StyledButton type="submit">Ajouter recette</StyledButton>
      </StyledForm>
    </StyledAddRecipeForm>
  );
};

export default AddRecipe;