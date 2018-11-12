import { combineReducers } from 'redux';

import playlistReducer from './Playlist/reducer';
import searchReducer from './Search/reducer';
import playerReducer from './Player/reducer';

export interface ApplicationState {
  search: any,
  playlist: any,
  player: any,
}

export default combineReducers<ApplicationState>({
  player: playerReducer,
  playlist: playlistReducer,
  search: searchReducer,
});
