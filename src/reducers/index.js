import { combineReducers, createStore } from 'redux';
import books from './books';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  books,
});

const store = createStore(rootReducer);

export default store;
