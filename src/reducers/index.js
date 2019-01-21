import {combineReducers} from 'redux';
import userReducer from './userReducers';
import printHelloWorldReducer from './printHelloWorldReducer';

const combinedReducers = combineReducers({user:userReducer, data:printHelloWorldReducer});

export default combinedReducers;