import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Chargement des favoris depuis localStorage au montage du composant
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const addFavorite = (property) => {
    const newFavorites = [...favorites, property];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (propertyId) => {
    const newFavorites = favorites.filter(fav => fav.id !== propertyId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (propertyId) => {
    return favorites.some(fav => fav.id === propertyId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
