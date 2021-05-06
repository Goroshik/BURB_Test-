import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { MovieList } from '../components/Lists';

import useDebounce from '../heplers/useDebounce';
import { actions } from '../store/actions';

import './index.css';

function SearchMoviesPage({ dispatch, movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchData = () => {
    dispatch(actions.requestMovies(debouncedSearchTerm))
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      fetchData();
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

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

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(SearchMoviesPage);
