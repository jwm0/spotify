import { STATUS } from '../types';
import { SEARCH } from './actions';

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
    // INFO: Get reservation
    case SEARCH.STARTED:
      return {
        ...state,
        query: action.query,
        status: STATUS.STARTED,
      };
    case SEARCH.SUCCEED:
      return {
        ...state,
        data: action.payload.data,
        status: STATUS.SUCCEED,
      };
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
