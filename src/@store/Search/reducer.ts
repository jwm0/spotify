import { STATUS } from '../types';
import { SEARCH, SEARCH_TYPE } from './actions';

const InitialState = {
  data: {},
  error: '',
  query: '',
  status: {
    isLoading: false,
    name: 'INITIAL',
  },
};

const SearchReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SEARCH.STARTED:
      return {
        ...state,
        query: action.query,
        status: STATUS.STARTED,
      };
    case SEARCH.SUCCEED: {
      const { songs, artists, playlists } = action.payload.data;

      return {
        ...state,
        data: { songs, artists, playlists },
        status: STATUS.SUCCEED,
      };
    }
    case SEARCH_TYPE.SUCCEED:
      return {
        ...state,
        data: action.payload.data.items,
        status: STATUS.SUCCEED,
      }
    case SEARCH.FAILED:
      return {
        ...state,
        error: action.payload.error,
        status: STATUS.FAILED,
      };
    case SEARCH.FINISHED:
      return {
        ...state,
        status: STATUS.FINISHED,
      };
    default:
      return state;
  }
};

export default SearchReducer;
