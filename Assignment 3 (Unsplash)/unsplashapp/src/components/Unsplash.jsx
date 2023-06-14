import React, { useContext, useEffect, useState } from 'react';
import { FavoritePhotosContext } from '../context/FavoritePhotosContext';
import './styles.css';
import Navbar from "./Navbar";

const Unsplash = () => {
  const { addToFavorites } = useContext(FavoritePhotosContext);

  const handleAddToFavorites = (photo) => {
    addToFavorites(photo);
  };

  // Get images from unsplash
  const CLIENT_SECRET = `h-wHyPBeHzum1NAUJ2Ce8IEIQX_0IrJ-aGKBOmrLAfQ`;
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    getPhotosFromSplash();
  }, []);

  const getPhotosFromSplash = async () => {
    const photoDataPromise = await fetch(
      `https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`
    );
    const photoJsonData = await photoDataPromise.json();
    const requiredData = photoJsonData.map((data) => {
      return {
        id: data.id,
        imageUrl: data.urls.full,
        description: data.alt_description,               
      };
    });
    setPhotosData(requiredData);
  };   

return (
  <>
    <Navbar />  

    <h1>Unsplash</h1>

    <div className="photo-container">
      {photosData.map((photo) => (
        <div key={photo.id}>
          <img width={200} src={photo.imageUrl} alt={photo.description} />         
          <p>{photo.description}</p>
          <button onClick={() => handleAddToFavorites(photo)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>

  </>
);

};

export default Unsplash;
