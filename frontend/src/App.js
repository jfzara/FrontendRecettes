import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importation des composants de React Router
import Login from './pages/Login'; // Importation de la page de connexion
import Signup from './pages/Signup'; // Importation de la page d'inscription
import RecipeList from './pages/RecipeList'; // Importation de la liste des recettes
import AddRecipe from './pages/AddRecipe'; // Importation de la page d'ajout de recette
import EditRecipe from './pages/EditRecipe'; // Importation de la page de modification de recette
import RecipeDetail from './pages/RecipeDetail'; // Importation de la page de détails de recette
import Navbar from './components/Navbar'; // Importation de la barre de navigation
import { AuthProvider } from './components/AuthContext'; // Importation du contexte d'authentification
import { ToastContainer } from 'react-toastify'; // Importation du conteneur de notifications
import 'react-toastify/dist/ReactToastify.css'; // Importation des styles pour react-toastify
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP

// Configurer l'URL de base d'Axios pour toutes les requêtes
axios.defaults.baseURL = 'http://localhost:5000/api';

const App = () => {
  return (
    <Router> {/* Enveloppe l'application avec le routeur */}
      <AuthProvider> {/* Fournit le contexte d'authentification à toute l'application */}
        <Navbar /> {/* Affiche la barre de navigation */}
        <Routes> {/* Définit les différentes routes de l'application */}
          <Route path="/" element={<Login />} /> {/* Route pour la page de connexion */}
          <Route path="/login" element={<Login />} /> {/* Route alternative pour la page de connexion */}
          <Route path="/signup" element={<Signup />} /> {/* Route pour la page d'inscription */}
          <Route path="/RecipeList" element={<RecipeList />} /> {/* Route pour la liste des recettes */}
          <Route path="/AddRecipe" element={<AddRecipe />} /> {/* Route pour la page d'ajout de recette */}
          <Route path="/EditRecipe/:id" element={<EditRecipe />} /> {/* Route pour la page de modification de recette avec ID */}
          <Route path="/RecipeDetail/:id" element={<RecipeDetail />} /> {/* Route pour la page de détails de recette avec ID */}
        </Routes>
        <ToastContainer /> {/* Affiche les notifications */}
      </AuthProvider>
    </Router>
  );
};

export default App; // Exportation du composant App