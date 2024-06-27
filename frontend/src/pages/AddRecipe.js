import React, { useState } from 'react'; // Importer React et useState pour gérer les états locaux
import styled from 'styled-components'; // Importer styled-components pour le style CSS en JS
import api from '../api'; // Importer l'instance API configurée
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation

// Styles pour le formulaire
const StyledForm = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

// Styles pour les champs d'entrée
const StyledInput = styled.input`
  width: calc(100% - 16px);
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// Styles pour le bouton
const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Composant AddRecipe pour ajouter une nouvelle recette
const AddRecipe = () => {
  // États pour chaque champ du formulaire
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate(); // pour naviguer vers une autre page

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    try {
      // Envoyer une requête POST à l'API pour créer une nouvelle recette
      const response = await api.post('/recipes', {
        name,
        ingredients,
        instructions,
        category,
        imageUrl,
      });
      console.log(response.data); // Afficher la réponse dans la console
      navigate('/recipes'); // Rediriger vers la liste des recettes après l'ajout
    } catch (error) {
      console.error('Error creating recipe:', error); // Afficher l'erreur en cas d'échec
    }
  };

  // Rendu du formulaire
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Ajouter une recette</h2>
      <StyledInput
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Ingrédients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Catégorie"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="URL de l'image"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <StyledButton type="submit">Ajouter la recette</StyledButton>
    </StyledForm>
  );
};

export default AddRecipe; // Exporter le composant pour l'utiliser ailleurs
