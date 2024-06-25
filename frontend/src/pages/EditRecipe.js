import React, { useState, useEffect } from 'react'; // Importation des hooks useState et useEffect de React
import { useParams, useNavigate } from 'react-router-dom'; // Importation des hooks de react-router-dom pour la navigation
import styled from 'styled-components'; // Importation de styled-components pour la gestion du style CSS
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP (bien que non utilisé ici)

// Définition du style pour le conteneur de formulaire de modification
const StyledEditForm = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Définition du style pour le formulaire
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Définition du style pour les labels
const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

// Définition du style pour les inputs
const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

// Définition du style pour les textareas
const StyledTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

// Définition du style pour les selects
const StyledSelect = styled.select`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

// Définition du style pour les boutons
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

// Composant EditRecipe
const EditRecipe = ({ recipes, setRecipes }) => {
  const { id } = useParams(); // Récupération de l'ID de la recette à modifier depuis l'URL
  const navigate = useNavigate(); // Hook pour naviguer vers une autre page
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: '',
  }); // État local pour stocker les données de la recette à modifier

  // useEffect pour charger les données de la recette à modifier lorsqu'on a l'ID et la liste des recettes
  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(id)); // Recherche de la recette par ID
      if (recipeToEdit) {
        setRecipeData(recipeToEdit); // Mise à jour de l'état avec les données de la recette
      }
    }
  }, [id, recipes]); // Dépendances du useEffect

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecipeData({ ...recipeData, [id]: value }); // Mise à jour de l'état avec les nouvelles valeurs
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === parseInt(id) ? recipeData : recipe
    ); // Mise à jour de la liste des recettes avec la recette modifiée
    setRecipes(updatedRecipes); // Mise à jour de l'état des recettes dans le parent
    navigate('/RecipeList'); // Navigation vers la liste des recettes
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

export default EditRecipe; // Exportation du composant EditRecipe