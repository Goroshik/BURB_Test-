import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { MovieList } from '../components/Lists';

import useDebounce from '../heplers/useDebounce';
import { actions } from '../store/actions';

import './index.css';

function SearchMoviesPage({ movies, getMovies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      getMovies(debouncedSearchTerm);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm, getMovies]);

  return (
    <>
      <header>
        <input
          className="searchInput"
          placeholder="The Powerpuff Girls"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </header>
      <main>
        {isSearching && <div>Searching ...</div>}
        <MovieList data={movies} />
      </main>
    </>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies.data,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    getMovies: (searchString) => dispatch(actions.requestMovies(searchString))
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SearchMoviesPage);
