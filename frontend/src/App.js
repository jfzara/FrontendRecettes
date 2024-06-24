import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipeList from './pages/RecipeList';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetail from './pages/RecipeDetail';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/RecipeList" element={<RecipeList recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/AddRecipe" element={<AddRecipe recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/EditRecipe/:id" element={<EditRecipe recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/RecipeDetail/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </Router>
  );
};

export default App;