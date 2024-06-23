import React from 'react';
import styled from 'styled-components'


const StyledRecipeList = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
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



const RecipeList = () => {
    // Exemple de données de recettes (à remplacer par vos données réelles)
    const recipes = [
      { id: 1, title: 'Pizza', category: 'Plat', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-YrEBAHHFG8fOs335Iu2p0KlTeDdHnhDlg&s' },
      { id: 2, title: 'Salade', category: 'Entrée', imageUrl: 'https://img.passeportsante.net/1200x675/2021-03-02/i100060-salade-de-laitue-concombres-et-tomates.webp' },
      { id: 3, title: 'Gâteau', category: 'Dessert', imageUrl: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg' },
    ];
  
    return (
      <StyledRecipeList>
        <h2>Liste des Recettes</h2>
        <SearchBar type="text" placeholder="Rechercher des recettes..." />
  
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id}>
            <RecipeImage src={recipe.imageUrl} alt={recipe.title} />
            <RecipeDetails>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeCategory>{recipe.category}</RecipeCategory>
            </RecipeDetails>
            <ButtonContainer>
              <ModifyButton>Modifier</ModifyButton>
              <DeleteButton>Supprimer</DeleteButton>
            </ButtonContainer>
            
          </RecipeCard>
        ))}
      </StyledRecipeList>
    );
  };
  
  export default RecipeList;