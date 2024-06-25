import React, { useState } from 'react';
import styled from 'styled-components'; // Importation de styled-components pour la gestion du style CSS
import { Navigate } from 'react-router-dom'; // Importation de Navigate pour la redirection
import { toast } from 'react-toastify'; // Importation de toast pour les notifications
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP (bien que non utilisé ici)



// Définition du style pour le formulaire d'ajout de recette
const StyledAddRecipeForm = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 8px;
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
const StyledTextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  resize: vertical;
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

// Composant AddRecipe
const AddRecipe = ({ recipes, setRecipes }) => {
  // Déclaration de l'état pour stocker les données de la recette
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: '',
  });

  const [submitted, setSubmitted] = useState(false); // État pour gérer la soumission du formulaire

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecipeData({ ...recipeData, [id]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...recipeData, id: recipes.length + 1 }; // Ajout d'un ID à la recette
    setRecipes([...recipes, newRecipe]); // Ajout de la nouvelle recette à la liste des recettes
    toast.success('Recette ajoutée avec succès!'); // Notification de succès
    setRecipeData({
      recipeName: '',
      ingredients: '',
      instructions: '',
      category: '',
      imageUrl: '',
    }); // Réinitialisation des champs du formulaire
    setSubmitted(true); // Mise à jour de l'état pour indiquer que le formulaire a été soumis
  };

  // Redirection vers la liste des recettes après la soumission du formulaire
  if (submitted) {
    return <Navigate to="/RecipeList" />;
  }

  return (
    <StyledAddRecipeForm>
      <h2>Ajouter une recette</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="recipeName">Nom recette:</StyledLabel>
        <StyledInput
          type="text"
          id="recipeName"
          value={recipeData.recipeName}
          onChange={handleChange}
          required
        />

        <StyledLabel htmlFor="ingredients">Ingrédients:</StyledLabel>
        <StyledTextArea
          id="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
          rows="4"
          required
        />

        <StyledLabel htmlFor="instructions">Instructions:</StyledLabel>
        <StyledTextArea
          id="instructions"
          value={recipeData.instructions}
          onChange={handleChange}
          rows="4"
          required
        />

        <StyledLabel htmlFor="category">Catégorie:</StyledLabel>
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

        <StyledLabel htmlFor="imageUrl">Image URL:</StyledLabel>
        <StyledInput
          type="text"
          id="imageUrl"
          value={recipeData.imageUrl}
          onChange={handleChange}
        />

        <StyledButton type="submit">Ajouter recette</StyledButton>
      </StyledForm>
    </StyledAddRecipeForm>
  );
};

export default AddRecipe; // Exportation du composant AddRecipe