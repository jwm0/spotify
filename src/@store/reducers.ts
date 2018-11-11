import { combineReducers } from 'redux';

import playlistReducer from './Playlist/reducer';
import searchReducer from './Search/reducer';

export interface ApplicationState {
  search: any,
  playlist: any,
}

export default combineReducers<ApplicationState>({
  // queue: queueReducer
  playlist: playlistReducer,
  search: searchReducer,
});
