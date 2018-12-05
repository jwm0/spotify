import { PLAYLIST, USER, USER_PLAYLISTS } from './actions';

const InitialState = {
  name: '',
  photo: '',
  playlists: [],
  uid: null,
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case USER.LOGIN:
      return {
        ...action.payload,
      };
    case USER.LOGOUT:
      return InitialState;
    case PLAYLIST.CREATE:
      const { metaPlaylist } = action.payload;

      return {
        ...state,
        playlists: [
          ...state.playlists,
          metaPlaylist,
        ],
      };
    case USER_PLAYLISTS.SUCCEED:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default UserReducer;
