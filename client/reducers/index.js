import { combineReducers } from 'redux';
import rightReducer from './right-reducer';
import wrongReducer from './wrong-reducer';
import unguessedReducer from './unguessed-reducer';

const rootReducer = combineReducers({
  unguessed: unguessedReducer,
  right: rightReducer,
  wrong: wrongReducer
})

export default rootReducer
