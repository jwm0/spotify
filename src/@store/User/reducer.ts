import { PLAYLIST, USER } from './actions';

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
    case PLAYLIST.CREATE:
      const { metaPlaylist } = action.payload;

      return {
        ...state,
        playlists: [
          ...state.playlists,
          metaPlaylist,
        ],
      };
    default:
      return state;
  }
};

export default UserReducer;
