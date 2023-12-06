// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers/bookReducer'; // Your combined reducers

const store = createStore(rootReducer);

export default store;
