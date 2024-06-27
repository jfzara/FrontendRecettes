import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import styled from 'styled-components';

// Styled components pour structurer et styliser les éléments de la page de liste des recettes
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const RecipeCard = styled.div`
  border: 1px solid lightgrey;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const RecipeDetails = styled.div`
  padding: 10px;
`;

const RecipeTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 18px;
`;

const RecipeCategory = styled.p`
  margin: 0 0 10px;
  color: grey;
`;

const ActionButton = styled.button`
  background-color: ${props => props.delete ? 'red' : 'blue'};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border-top: 1px solid lightgrey;

  &:hover {
    background-color: ${props => props.delete ? 'darkred' : 'darkblue'};
  }
`;

// Composant principal pour afficher la liste des recettes
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]); // État local pour stocker les recettes
  const [searchTerm, setSearchTerm] = useState(''); // État local pour stocker le terme de recherche
  const navigate = useNavigate();

  useEffect(() => {
    // Fonction pour récupérer les recettes depuis l'API
    const fetchRecipes = async () => {
      try {
        const response = await api.get('/recipes'); // Requête API pour obtenir les recettes
        setRecipes(response.data); // Mettre à jour l'état avec les données des recettes
      } catch (error) {
        console.error('Error fetching recipes:', error); // Gérer les erreurs éventuelles
      }
    };
    fetchRecipes(); // Appel de la fonction pour récupérer les recettes
  }, []);

  // Fonction pour supprimer une recette
  const handleDelete = async (id) => {
    try {
      await api.delete(`/recipes/${id}`); // Requête API pour supprimer la recette
      setRecipes(recipes.filter(recipe => recipe.id !== id)); // Mettre à jour l'état pour retirer la recette supprimée
    } catch (error) {
      console.error('Error deleting recipe:', error); // Gérer les erreurs éventuelles
    }
  };

  // Filtrer les recettes en fonction du terme de recherche
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Title>Mes Recettes</Title> {/* Titre de la page */}
      <SearchBar
        type="text"
        placeholder="Rechercher des recettes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> {/* Barre de recherche */}
      <RecipeGrid>
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <RecipeImage src={recipe.imageUrl} alt={recipe.name} /> {/* Image de la recette */}
            </Link>
            <RecipeDetails>
              <RecipeTitle>{recipe.name}</RecipeTitle> {/* Nom de la recette */}
              <RecipeCategory>{recipe.category}</RecipeCategory> {/* Catégorie de la recette */}
              <ActionButton onClick={() => navigate(`/edit-recipe/${recipe.id}`)}>Modifier</ActionButton> {/* Bouton pour modifier la recette */}
              <ActionButton delete onClick={() => handleDelete(recipe.id)}>Supprimer</ActionButton> {/* Bouton pour supprimer la recette */}
            </RecipeDetails>
          </RecipeCard>
        ))}
      </RecipeGrid>
    </Container>
  );
};

export default RecipeList; // Exporter le composant pour l'utiliser dans d'autres parties de l'application

