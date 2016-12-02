import { combineReducers } from 'redux';
import nameReducer from './names-reducer';
import userReducer from './user-reducer';


const rootReducer = combineReducers({
  names: nameReducer,
  user: userReducer
})

export default rootReducer
