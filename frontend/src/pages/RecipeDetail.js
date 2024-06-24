import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledRecipeDetail = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const RecipeCard = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const RecipeDetails = styled.div`
  padding: 20px;
`;

const RecipeTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 8px;
`;

const RecipeCategory = styled.p`
  margin-bottom: 8px;
`;

const RecipeIngredients = styled.p`
  margin-bottom: 8px;
`;

const RecipeInstructions = styled.p`
  margin-bottom: 8px;
`;

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recette non trouvée.</p>;
  }

  return (
    <StyledRecipeDetail>
      <h2>Détails de la Recette</h2>
      <RecipeCard>
        <RecipeImage src={recipe.imageUrl} alt={recipe.recipeName} />
        <RecipeDetails>
          <RecipeTitle>{recipe.recipeName}</RecipeTitle>
          <RecipeCategory><strong>Catégorie:</strong> {recipe.category}</RecipeCategory>
          <RecipeIngredients><strong>Ingrédients:</strong> {recipe.ingredients}</RecipeIngredients>
          <RecipeInstructions><strong>Instructions:</strong> {recipe.instructions}</RecipeInstructions>
        </RecipeDetails>
      </RecipeCard>
    </StyledRecipeDetail>
  );
};

export default RecipeDetail;