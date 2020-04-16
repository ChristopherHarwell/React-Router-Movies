import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route, Link } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/'>
        <MovieList/>
      </Route>
      <Route path="/movies/:moviesID">
        <Movie/>
      </Route>
      
     
    </div>
  );
};

export default App;
