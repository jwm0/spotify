import { PLAYER } from './actions';

const InitialState = {
  nowPlaying: 0,
  queue: [],
};

const PlayerReducer = (state = InitialState, action) => {
  switch (action.type) {
    case PLAYER.SET_NOW_PLAYING: {
      const index = state.queue.length > 0 ? state.nowPlaying + 1 : 0;
      const details = {
        artist: action.artist,
        id: action.id,
        title: action.title,
      };
      const newQueue = state.queue.slice();
      newQueue.splice(index, 0, details as never);

      return {
        ...state,
        nowPlaying: index,
        queue: newQueue,
      };
    };
    case PLAYER.NEXT_SONG: {
      const queueSize = state.queue.length;
      const index = state.nowPlaying;
      const newIndex = index + 1 >= queueSize ? index : index + 1;

      return {
        ...state,
        nowPlaying: newIndex,
      };
    };
    case PLAYER.PREVIOUS_SONG: {
      const index = state.nowPlaying;
      let newIndex = index > 0 ? index - 1 : 0;

      return {
        ...state,
        nowPlaying: newIndex,
      }
    };
    case PLAYER.CUE_SONG:
      return {
        ...state,
        queue: [
          ...state.queue,
          {
            artist: action.artist,
            id: action.id,
            title: action.title,
          },
        ]
      }
    default:
      return state;
  }
};

export default PlayerReducer;
