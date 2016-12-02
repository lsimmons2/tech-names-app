//this store function will create the store in the entry of the app

import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';


let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { names: [] }){
  return finalCreateStore(rootReducer, initialState)
}
