//this store function will create the store in the entry of the app

import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

let defInitialState = {
  unguessed: [
    {
      real: {
        name: 'Vuvuzela'
      },
      notReal: {
        name: 'Bonanza.js'
      }
    }
  ],
  right: [],
  wrong: []
}

export default function configureStore(initialState = defInitialState){
  return finalCreateStore(rootReducer, initialState)
}
