import React from 'react'; // Importation de React pour créer des composants
import styled from 'styled-components'; // Importation de styled-components pour la gestion des styles
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate pour la navigation programmatique
import { toast } from 'react-toastify'; // Importation de toast pour les notifications
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP (potentiellement utile pour des fonctionnalités futures)

// Définition du style pour le conteneur principal de la liste des recettes
const StyledRecipeList = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

// Définition du style pour la barre de recherche
const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 16px;
`;

// Définition du style pour chaque carte de recette
const RecipeCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1rem;
`;

// Définition du style pour l'image de la recette
const RecipeImage = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
`;

// Définition du style pour la section des détails de la recette
const RecipeDetails = styled.div`
  padding: 10px;
`;

// Définition du style pour le titre de la recette
const RecipeTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 8px;
`;

// Définition du style pour la catégorie de la recette
const RecipeCategory = styled.p`
  margin-bottom: 8px;
`;

// Définition du style pour le conteneur des boutons
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
  margin-bottom: 1rem;
`;

// Définition du style pour le bouton de modification
const ModifyButton = styled.button`
  background-color: yellow;
  color: black;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

// Définition du style pour le bouton de suppression
const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

// Définition du style pour le bouton de détails
const DetailButton = styled.button`
  background-color: lightgrey;
  color: black;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

// Composant RecipeList pour afficher la liste des recettes
const RecipeList = ({ recipes, setRecipes }) => {
  const navigate = useNavigate(); // Utilisation de useNavigate pour naviguer vers d'autres pages

  // Fonction pour gérer la suppression d'une recette
  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id); // Filtrer les recettes pour exclure celle avec l'id donné
    setRecipes(updatedRecipes); // Mettre à jour l'état des recettes
    toast.success('Recette supprimée avec succès!'); // Afficher une notification de succès
  };

  // Fonction pour gérer la navigation vers les détails d'une recette
  const handleDetail = (id) => {
    navigate(`/RecipeDetail/${id}`); // Naviguer vers la page des détails de la recette
  };

  // Retourne la liste des recettes sous forme de cartes
  return (
    <StyledRecipeList>
      <h2>Liste des Recettes</h2>
      <SearchBar type="text" placeholder="Rechercher des recettes..." /> {/* Barre de recherche */}

      {recipes.map((recipe) => ( // Parcourir la liste des recettes
        <RecipeCard key={recipe.id}> {/* Carte de recette avec clé unique */}
          <RecipeImage src={recipe.imageUrl} alt={recipe.title} /> {/* Affichage de l'image de la recette */}
          <RecipeDetails>
            <RecipeTitle>{recipe.recipeName}</RecipeTitle> {/* Affichage du titre de la recette */}
            <RecipeCategory><strong>Catégorie:</strong> {recipe.category}</RecipeCategory> {/* Affichage de la catégorie */}
            <ButtonContainer>
              <ModifyButton onClick={() => navigate(`/EditRecipe/${recipe.id}`)}>Modifier</ModifyButton> {/* Bouton de modification */}
              <DeleteButton onClick={() => handleDelete(recipe.id)}>Supprimer</DeleteButton> {/* Bouton de suppression */}
              <DetailButton onClick={() => handleDetail(recipe.id)}>Détails</DetailButton> {/* Bouton de détails */}
            </ButtonContainer>
          </RecipeDetails>
        </RecipeCard>
      ))}
    </StyledRecipeList>
  );
};

export default RecipeList; // Exportation du composant RecipeList