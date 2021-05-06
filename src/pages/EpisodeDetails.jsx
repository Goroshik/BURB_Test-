import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from '../store/actions';

import { FullDetailView } from '../components/Details';

function EpisodeDetails({ episodes, current, setEpisode }) {
  const params = useParams();

  useEffect(() => {
    setEpisode(episodes, params.id);
  }, [episodes, params.id, setEpisode])

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

const mapStateToDispatch = (dispatch) => {
  return {
    setEpisode: (episodes, episodeId) => dispatch(actions.setCurrentEpisode(episodes, episodeId))
  }
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(EpisodeDetails);
