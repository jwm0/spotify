import { STATUS } from '../types';
import { DETAILS, PLAYLIST } from './actions';
import { PLAYLIST as USER_PLAYLIST } from '../User/actions';

const InitialState = {
  authorId: '',
  authorName: '',
  description: '',
  id: '',
  image: '',
  items: [],
  name: '',
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
      const { items } = action.payload;

      return {
        ...state,
        items,
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
    case PLAYLIST.PUT:
      return {
        ...state,
        ...action.details,
      }
    case USER_PLAYLIST.PUBLISH:
      return {
        ...state,
        public: true,
      };
    case USER_PLAYLIST.UNPUBLISH:
      return {
        ...state,
        public: false,
      };
    default:
      return state;
  }
};

export default PlaylistReducer;
