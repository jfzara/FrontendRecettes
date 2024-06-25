import React from 'react'; // Importation de React pour créer des composants
import { useParams } from 'react-router-dom'; // Importation de useParams pour accéder aux paramètres de l'URL
import styled from 'styled-components'; // Importation de styled-components pour la gestion des styles
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP

// Définition du style pour le conteneur principal des détails de la recette
const StyledRecipeDetail = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

// Définition du style pour la carte de la recette
const RecipeCard = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
`;

// Définition du style pour l'image de la recette
const RecipeImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

// Définition du style pour la section des détails de la recette
const RecipeDetails = styled.div`
  padding: 20px;
`;

// Définition du style pour le titre de la recette
const RecipeTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 8px;
`;

// Définition du style pour la catégorie de la recette
const RecipeCategory = styled.p`
  margin-bottom: 8px;
`;

// Définition du style pour la liste des ingrédients de la recette
const RecipeIngredients = styled.p`
  margin-bottom: 8px;
`;

// Définition du style pour les instructions de la recette
const RecipeInstructions = styled.p`
  margin-bottom: 8px;
`;

// Composant RecipeDetail pour afficher les détails d'une recette
const RecipeDetail = ({ recipes }) => {
  const { id } = useParams(); // Récupération du paramètre id depuis l'URL
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id)); // Recherche de la recette correspondant à l'id

  // Si la recette n'est pas trouvée, afficher un message d'erreur
  if (!recipe) {
    return <p>Recette non trouvée.</p>;
  }

  // Affichage des détails de la recette
  return (
    <StyledRecipeDetail>
      <h2>Détails de la Recette</h2>
      <RecipeCard>
        <RecipeImage src={recipe.imageUrl} alt={recipe.recipeName} /> {/* Affichage de l'image de la recette */}
        <RecipeDetails>
          <RecipeTitle>{recipe.recipeName}</RecipeTitle> {/* Affichage du titre de la recette */}
          <RecipeCategory><strong>Catégorie:</strong> {recipe.category}</RecipeCategory> {/* Affichage de la catégorie */}
          <RecipeIngredients><strong>Ingrédients:</strong> {recipe.ingredients}</RecipeIngredients> {/* Affichage des ingrédients */}
          <RecipeInstructions><strong>Instructions:</strong> {recipe.instructions}</RecipeInstructions> {/* Affichage des instructions */}
        </RecipeDetails>
      </RecipeCard>
    </StyledRecipeDetail>
  );
};

export default RecipeDetail; // Exportation du composant RecipeDetail