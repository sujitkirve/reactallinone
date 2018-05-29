import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../_reducers';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare, 
        createLogger
    )
 );
