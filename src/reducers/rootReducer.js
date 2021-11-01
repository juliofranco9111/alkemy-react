import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { teamReducer } from './teamReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  team: teamReducer,
});