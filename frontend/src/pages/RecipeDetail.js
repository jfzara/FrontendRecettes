import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import styled from 'styled-components';

// Styled components pour structurer et styliser les éléments de la page de détails de recette
const RecipeContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const RecipeTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const RecipeCategory = styled.p`
  font-size: 18px;
  color: grey;
  margin-bottom: 20px;
`;

const RecipeSection = styled.div`
  margin-bottom: 20px;
`;

// Composant principal pour afficher les détails d'une recette
const RecipeDetail = () => {
  const { id } = useParams(); // Récupérer l'ID de la recette depuis l'URL
  const [recipe, setRecipe] = useState(null); // État local pour stocker les détails de la recette

  useEffect(() => {
    // Fonction pour récupérer les détails de la recette depuis l'API
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`/recipes/${id}`); // Requête API pour obtenir la recette
        setRecipe(response.data); // Mettre à jour l'état avec les données de la recette
      } catch (error) {
        console.error('Error fetching recipe:', error); // Gérer les erreurs éventuelles
      }
    };
    fetchRecipe(); // Appel de la fonction pour récupérer la recette
  }, [id]); // Dépendances pour exécuter l'effet lorsque l'ID change

  if (!recipe) {
    return <div>Loading...</div>; // Afficher un message de chargement si la recette n'est pas encore disponible
  }

  return (
    <RecipeContainer>
      <RecipeImage src={recipe.imageUrl} alt={recipe.name} /> {/* Image de la recette */}
      <RecipeTitle>{recipe.name}</RecipeTitle> {/* Nom de la recette */}
      <RecipeCategory>Catégorie: {recipe.category}</RecipeCategory> {/* Catégorie de la recette */}
      <RecipeSection>
        <h2>Ingrédients:</h2>
        <p>{recipe.ingredients}</p> {/* Ingrédients de la recette */}
      </RecipeSection>
      <RecipeSection>
        <h2>Instructions:</h2>
        <p>{recipe.instructions}</p> {/* Instructions de la recette */}
      </RecipeSection>
    </RecipeContainer>
  );
};

export default RecipeDetail; // Exporter le composant pour l'utiliser dans d'autres parties de l'application
