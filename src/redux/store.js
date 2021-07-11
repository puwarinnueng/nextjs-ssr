import { createStore } from 'redux';
import carRuducer from './reducers/carReducer';

const store = createStore(carRuducer);


export default store;