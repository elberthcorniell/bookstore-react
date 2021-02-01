import { combineReducers, createStore } from 'redux';
import books from './books';

const rootReducer = combineReducers({
  books,
});

const store = createStore(rootReducer);

export default store;
