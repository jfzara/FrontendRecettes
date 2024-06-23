import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipeList from './pages/RecipeList';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetail from './pages/RecipeDetail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/RecipeList" element={<RecipeList />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/EditRecipe" element={<EditRecipe />} />
        <Route path="/RecipeDetail" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;