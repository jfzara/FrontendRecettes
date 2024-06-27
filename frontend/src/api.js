import axios from 'axios';

// Crée une instance d'axios avec une URL de base et des en-têtes par défaut
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // URL de base définie dans le fichier .env
  headers: {
    'Content-Type': 'application/json', // Type de contenu par défaut pour les requêtes
  },
});

// Intercepte chaque requête pour ajouter le token JWT si disponible
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Récupère le token JWT depuis le localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Ajoute le token à l'en-tête Authorization
  }
  return config; // Retourne la configuration modifiée ou originale
});

export default api; // Exporte l'instance d'axios configurée
