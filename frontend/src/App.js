import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify'; // Importer ToastContainer
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider> {/* Fournisseur de contexte d'authentification */}
      <Router> {/* Gestionnaire de routage */}
        <Navbar /> {/* Barre de navigation */}
        <Routes> {/* Routes de l'application */}
          <Route path="/login" element={<Login />} /> {/* Page de connexion */}
          <Route path="/signup" element={<SignUp />} /> {/* Page d'inscription */}
          {/* Routes protégées par l'authentification */}
          <Route path="/recipes" element={<PrivateRoute><RecipeList /></PrivateRoute>} />
          <Route path="/recipes/:id" element={<PrivateRoute><RecipeDetail /></PrivateRoute>} />
          <Route path="/add-recipe" element={<PrivateRoute><AddRecipe /></PrivateRoute>} />
          <Route path="/edit-recipe/:id" element={<PrivateRoute><EditRecipe /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><RecipeList /></PrivateRoute>} />
        </Routes>
      </Router>
      <ToastContainer /> {/* Conteneur pour afficher les notifications Toast */}
    </AuthProvider>
  );
};

export default App;
