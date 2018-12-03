import { combineReducers } from 'redux';

import playlistReducer from './Playlist/reducer';
import searchReducer from './Search/reducer';
import playerReducer from './Player/reducer';
import userReducer from './User/reducer';

export interface ApplicationState {
  search: any,
  playlist: any,
  player: any,
  user: any,
}

export default combineReducers<ApplicationState>({
  player: playerReducer,
  playlist: playlistReducer,
  search: searchReducer,
  user: userReducer,
});
