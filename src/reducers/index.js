import { combineReducers } from 'redux';
import counterreducers from './counterreducer';

const reducers = combineReducers({
  counterreducers,
});

export default reducers;
