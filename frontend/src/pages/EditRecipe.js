import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const EditRecipe = ({ recipes, setRecipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(id));
      if (recipeToEdit) {
        setRecipeData(recipeToEdit);
      }
    }
  }, [id, recipes]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecipeData({ ...recipeData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === parseInt(id) ? recipeData : recipe
    );
    setRecipes(updatedRecipes);
    navigate('/RecipeList');
  };

  return (
    <StyledEditForm>
      <h2>Modifier la Recette</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="recipeName">Nom de la recette :</StyledLabel>
        <StyledInput
          type="text"
          id="recipeName"
          value={recipeData.recipeName}
          onChange={handleChange}
          required
        />

        <StyledLabel htmlFor="ingredients">Ingrédients :</StyledLabel>
        <StyledTextarea
          id="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
          rows="4"
          required
        />

        <StyledLabel htmlFor="instructions">Instructions :</StyledLabel>
        <StyledTextarea
          id="instructions"
          value={recipeData.instructions}
          onChange={handleChange}
          rows="4"
          required
        />

        <StyledLabel htmlFor="category">Catégorie :</StyledLabel>
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

        <StyledLabel htmlFor="imageUrl">URL de l'image :</StyledLabel>
        <StyledInput
          type="text"
          id="imageUrl"
          value={recipeData.imageUrl}
          onChange={handleChange}
        />

        <StyledButton type="submit">Modifier la Recette</StyledButton>
      </StyledForm>
    </StyledEditForm>
  );
};

export default EditRecipe;