import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  margin-bottom: 1rem;
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

const DetailButton = styled.button`
  background-color: lightgrey;
  color: black;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

const RecipeList = ({ recipes, setRecipes }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
    toast.success('Recette supprimée avec succès!');
  };

  const handleDetail = (id) => {
    navigate(`/RecipeDetail/${id}`);
  };

  return (
    <StyledRecipeList>
      <h2>Liste des Recettes</h2>
      <SearchBar type="text" placeholder="Rechercher des recettes..." />

      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id}>
          <RecipeImage src={recipe.imageUrl} alt={recipe.title} />
          <RecipeDetails>
            <RecipeTitle>{recipe.recipeName}</RecipeTitle>
            <RecipeCategory><strong>Catégorie:</strong> {recipe.category}</RecipeCategory>
            <ButtonContainer>
              <ModifyButton onClick={() => navigate(`/EditRecipe/${recipe.id}`)}>Modifier</ModifyButton>
              <DeleteButton onClick={() => handleDelete(recipe.id)}>Supprimer</DeleteButton>
              <DetailButton onClick={() => handleDetail(recipe.id)}>Détails</DetailButton>
            </ButtonContainer>
          </RecipeDetails>
        </RecipeCard>
      ))}
    </StyledRecipeList>
  );
};

export default RecipeList;