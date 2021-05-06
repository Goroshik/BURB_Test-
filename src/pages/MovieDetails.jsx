import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from '../store/actions';

import { FullDetailView } from '../components/Details';
import { EpisodeList } from '../components/Lists';

function MovieDetails({ dispatch, movie, episodes }) {
  const params = useParams();

  const fetchData = () => {
    dispatch(actions.requestCurrentMovie(params.id))
  }

  useEffect(() => {
    fetchData()
  }, [])

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

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(MovieDetails);
