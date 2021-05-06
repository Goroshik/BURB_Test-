import { EPISODES_CONSTS } from '../constants';

const initState = {
  data: [],
  current: {}
}

function reducer(state = initState, action) {
  switch (action.type) {
    case EPISODES_CONSTS.SET_EPISODES:
      return {
        ...state,
        data: action.data
      };
    case EPISODES_CONSTS.SET_CURRENT_EPISODE:
      return {
        ...state,
        current: action.data
      };
    default:
      return state;
  }
}

export default reducer;