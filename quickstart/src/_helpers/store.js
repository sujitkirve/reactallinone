import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../_reducers';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare, 
        loggerMiddleware
    )
 );
