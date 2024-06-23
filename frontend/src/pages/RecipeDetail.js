import React from 'react';
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

const RecipeDetail = () => {
  // Exemple de données de recette (à remplacer par vos données réelles)
  const recipe = {
    title: 'Pizza',
    category: 'Plat',
    ingredients: 'Tomate, Fromage, Pâte',
    instructions: '1. Préchauffer le four à 220°C. 2. Étaler la pâte...',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-YrEBAHHFG8fOs335Iu2p0KlTeDdHnhDlg&s', // URL de l'image de la recette
  };

  return (
    <StyledRecipeDetail>
      <h2>Détails de la Recette</h2>
      <RecipeCard>
        <RecipeImage src={recipe.imageUrl} alt={recipe.title} />
        <RecipeDetails>
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <RecipeCategory><strong>Catégorie:</strong> {recipe.category}</RecipeCategory>
          <RecipeIngredients><strong>Ingrédients:</strong> {recipe.ingredients}</RecipeIngredients>
          <RecipeInstructions><strong>Instructions:</strong> {recipe.instructions}</RecipeInstructions>
        </RecipeDetails>
      </RecipeCard>
    </StyledRecipeDetail>
  );
};

export default RecipeDetail;