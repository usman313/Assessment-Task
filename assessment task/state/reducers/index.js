import {combineReducers} from 'redux';
import counterReducer from './CounterReducer';

const reducers = combineReducers({
    counter: counterReducer
});

export default reducers;