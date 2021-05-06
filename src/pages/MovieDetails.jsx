import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from '../store/actions';

import { FullDetailView } from '../components/Details';
import { EpisodeList } from '../components/Lists';

function MovieDetails({ movie, episodes, getCurrentMovie }) {
  const params = useParams();

  useEffect(() => {
    getCurrentMovie(params.id);
  }, [params.id, getCurrentMovie])

  return (
    <div>
      <FullDetailView data={movie} />
      <EpisodeList data={episodes} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movie: state.movies.current,
    episodes: state.episodes.data
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    getCurrentMovie: (id) => dispatch(actions.requestCurrentMovie(id))
  }
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(MovieDetails);
