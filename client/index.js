import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './style/main.scss';
import configureStore from './store';
import { Provider } from 'react-redux';

let initialState = {
  unguessed: [
    {
      real: {
        name: 'Vuvuzela'
      },
      notReal: {
        name: 'Bonanza.js'
      }
    }//,
    // {
    //   real: {
    //     name: 'Mongoose'
    //   },
    //   notReal: {
    //     name: 'Porcupine'
    //   }
    // }
  ],
  right: [],
  wrong: []
}

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
