import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Unsplash from './components/Unsplash';
import Favorites from './components/Favorites';
import { FavoritePhotosProvider } from './context/FavoritePhotosContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <FavoritePhotosProvider>  

        <Routes>
          <Route path='/' element={<Unsplash/>} />
          <Route path='/favorites' element={<Favorites/>} />           
        </Routes>
                 
      </FavoritePhotosProvider>
    </Router>
  );
};

export default App;