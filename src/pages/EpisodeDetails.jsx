import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from '../store/actions';

import { FullDetailView } from '../components/Details';

function EpisodeDetails({ dispatch, episodes, current }) {
  const params = useParams();

  const fetchData = () => {
    dispatch(actions.setCurrentEpisode(episodes, params.id));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <FullDetailView data={current} isEpisode={true} />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    episodes: state.episodes.data,
    current: state.episodes.current,
  };
};

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(EpisodeDetails);
