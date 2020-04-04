import { combineReducers } from 'redux';
import postReducer from './postReducer';
import docReducer from './docReducer';
import userReducer from './userReducer';

export default combineReducers({
  posts: postReducer,
  doctor : docReducer,
  user : userReducer,
});
