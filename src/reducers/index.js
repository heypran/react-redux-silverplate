import {combineReducers} from 'redux';
import printHelloWorldReducer from './printHelloWorldReducer';

const combinedReducers = combineReducers({data:printHelloWorldReducer});

export default combinedReducers;