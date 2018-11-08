import { combineReducers } from 'redux';

import searchReducer from './Search/reducer';

export interface ApplicationState {
  search: any,
}

export default combineReducers<ApplicationState>({
  // queue: queueReducer
  search: searchReducer,
});
