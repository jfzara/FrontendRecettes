import React, { useState } from 'react';
import styled from 'styled-components';

const StyledRecipeList = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 16px;
`;

const RecipeCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
`;

const RecipeDetails = styled.div`
  padding: 10px;
`;

const RecipeTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 8px;
`;

const RecipeCategory = styled.p`
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
  margin-bottom: 1rem;
`;

const ModifyButton = styled.button`
  background-color: yellow;
  color: black;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

const RecipeList = ({ recipes }) => {
  // Utiliser le hook useState pour gérer la liste des recettes
  const [recipeList, setRecipeList] = useState(recipes);

  // Fonction pour supprimer une recette
  const handleDelete = (id) => {
    const updatedRecipes = recipeList.filter(recipe => recipe.id !== id);
    setRecipeList(updatedRecipes);
    // Ici, vous pouvez implémenter la logique pour supprimer la recette de votre backend
  };

  return (
    <StyledRecipeList>
      <h2>Liste des Recettes</h2>
      <SearchBar type="text" placeholder="Rechercher des recettes..." />

      {recipeList.map((recipe, index) => (
        <RecipeCard key={index}>
          <RecipeImage src={recipe.imageUrl} alt={recipe.recipeName} />
          <RecipeDetails>
            <RecipeTitle>{recipe.recipeName}</RecipeTitle>
            <RecipeCategory>{recipe.category}</RecipeCategory>
          </RecipeDetails>
          <ButtonContainer>
            <ModifyButton>Modifier</ModifyButton>
            <DeleteButton onClick={() => handleDelete(recipe.id)}>Supprimer</DeleteButton>
          </ButtonContainer>
        </RecipeCard>
      ))}
    </StyledRecipeList>
  );
};

export default RecipeList;