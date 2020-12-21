import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
console.log('🚀 ~ file: store.js ~ line 5 ~ store', store.getState());

export default store;
