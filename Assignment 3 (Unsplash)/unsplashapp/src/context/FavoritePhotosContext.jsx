import React, { createContext, useState } from 'react';

export const FavoritePhotosContext = createContext({
  favoritePhotos: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritePhotosProvider = ({ children }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const addToFavorites = (photo) => {
    setFavoritePhotos((prevPhotos) => [...prevPhotos, photo]);
  };

  const removeFromFavorites = (photo) => {
    setFavoritePhotos((prevPhotos) =>
      prevPhotos.filter((p) => p.id !== photo.id)
    );
  };

  return (
    <FavoritePhotosContext.Provider
      value={{
        favoritePhotos,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritePhotosContext.Provider>
  );
};
