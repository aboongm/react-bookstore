import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({ booksReducer, categoriesReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
