import { MOVIES_CONST } from '../constants';

const initState = {
  data: [],
  current: {}
};

function reducer(state = initState, action) {
  switch (action.type) {
    case MOVIES_CONST.SET_MOVIES:
      return {
        ...state,
        data: action.data
      };
    case MOVIES_CONST.SET_CURRENT_MOVIE:
      return {
        ...state,
        current: action.data
      };
    default:
      return state;
  }
};

export default reducer;