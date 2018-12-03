import { PLAYLIST } from './actions';

const InitialState = {
  id: null,
  name: '',
  playlists: [],
};

const PlaylistReducer = (state = InitialState, action) => {
  switch (action.type) {
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

export default PlaylistReducer;
