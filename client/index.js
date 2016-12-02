import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './style/main.scss';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

// here you'll create and configure our store
// use the createStore() method with the initialState and reducers
let initialState = {
  names: [
    {
      id: 0,
      real: false,
      name: 'sahster'
    }
  ]
}

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
