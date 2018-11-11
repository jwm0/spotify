import { STATUS } from '../types';
import { DETAILS } from './actions';

const InitialState = {
  details: [],
  status: {
    isLoading: false,
    name: 'INITIAL',
  },
};

const PlaylistReducer = (state = InitialState, action) => {
  switch (action.type) {
    case DETAILS.STARTED:
      return {
        ...state,
        status: STATUS.STARTED,
      };
    case DETAILS.SUCCEED: {
      const { details } = action.payload;

      return {
        ...state,
        details,
        status: STATUS.SUCCEED,
      };
    }
    case DETAILS.FAILED:
      return {
        ...state,
        status: STATUS.FAILED,
      };
    case DETAILS.FINISHED:
      return {
        ...state,
        status: STATUS.FINISHED,
      };
    default:
      return state;
  }
};

export default PlaylistReducer;
