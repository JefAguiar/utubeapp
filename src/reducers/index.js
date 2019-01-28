import AuthReducer from './AuthReducer';
import VideoReducer from './VideoReducer';
import SearchReducer from './SearchReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  authUser: AuthReducer,
  videoUser: VideoReducer,
  searchBar: SearchReducer
});