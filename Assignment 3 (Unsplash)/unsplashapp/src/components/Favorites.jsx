import React, { useContext } from 'react';
import Navbar from "./Navbar";
import './styles.css';
import { FavoritePhotosContext } from '../context/FavoritePhotosContext';

const Favorites = () => {
  const { favoritePhotos, removeFromFavorites } = useContext(FavoritePhotosContext);

  const handleRemoveFromFavorites = (photo) => {
    removeFromFavorites(photo);
  };

  return (
    <>
      <Navbar />

      <h1>Favorites</h1>

      <div className="photo-container">

        {favoritePhotos.length === 0 ? (
          <p>You have no favorite photos.</p>
        ) : (
          favoritePhotos.map((photo) => (
            <div key={photo.id}>
              <img width={200} src={photo.imageUrl} alt={photo.description} />         
              <p>{photo.description}</p>
              <button onClick={() => handleRemoveFromFavorites(photo)}>
                Remove from Favorites
              </button>
            </div>
          ))
        )}

      </div>
    </>
  );
};

export default Favorites;
