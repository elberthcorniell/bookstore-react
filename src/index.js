import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BookStore from './components';
import store from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <BookStore />
  </Provider>,
  document.getElementById('root'),
);
