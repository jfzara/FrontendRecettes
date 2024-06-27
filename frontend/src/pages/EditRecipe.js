import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

// Styles pour le formulaire d'édition
const StyledEditForm = styled.div`
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

// Styles pour le formulaire
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Styles pour les étiquettes
const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

// Styles pour les champs de saisie
const StyledInput = styled.input`
  width: calc(100% - 16px);
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// Styles pour les zones de texte
const StyledTextArea = styled.textarea`
  width: calc(100% - 16px);
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

// Styles pour le bouton
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

// Composant EditRecipe pour modifier une recette existante
const EditRecipe = () => {
  const { id } = useParams(); // Récupérer l'ID de la recette depuis l'URL
  const [name, setName] = useState(''); // État pour le nom de la recette
  const [ingredients, setIngredients] = useState(''); // État pour les ingrédients
  const [instructions, setInstructions] = useState(''); // État pour les instructions
  const [category, setCategory] = useState(''); // État pour la catégorie
  const [imageUrl, setImageUrl] = useState(''); // État pour l'URL de l'image
  const navigate = useNavigate(); // Utiliser pour naviguer vers une autre page

  // Effect pour récupérer les détails de la recette à éditer
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`/recipes/${id}`);
        const { name, ingredients, instructions, category, imageUrl } = response.data;
        setName(name); // Mettre à jour l'état avec les données récupérées
        setIngredients(ingredients);
        setInstructions(instructions);
        setCategory(category);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error(error); // Afficher l'erreur en cas d'échec
      }
    };
    fetchRecipe();
  }, [id]); // Exécuter l'effect à chaque changement de l'ID

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    try {
      await api.put(`/recipes/${id}`, { name, ingredients, instructions, category, imageUrl });
      navigate('/recipes'); // Rediriger vers la liste des recettes après modification
    } catch (error) {
      console.error(error); // Afficher l'erreur en cas d'échec
    }
  };

  // Rendu du formulaire d'édition
  return (
    <StyledEditForm>
      <h2>Modifier la Recette</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Nom de la recette :</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledLabel htmlFor="ingredients">Ingrédients :</StyledLabel>
        <StyledTextArea
          id="ingredients"
          placeholder="Ingrédients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="4"
          required
        />
        <StyledLabel htmlFor="instructions">Instructions :</StyledLabel>
        <StyledTextArea
          id="instructions"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows="4"
          required
        />
        <StyledLabel htmlFor="category">Catégorie :</StyledLabel>
        <StyledInput
          type="text"
          id="category"
          placeholder="Catégorie"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <StyledLabel htmlFor="imageUrl">URL de l'image :</StyledLabel>
        <StyledInput
          type="text"
          id="imageUrl"
          placeholder="URL de l'image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <StyledButton type="submit">Modifier la Recette</StyledButton>
      </StyledForm>
    </StyledEditForm>
  );
};

export default EditRecipe; // Exporter le composant pour l'utiliser ailleurs
