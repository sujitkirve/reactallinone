import {combineReducers} from 'redux';
import {authentication} from './authentication.reducer';
import {alert} from './alert.reducer';
import {registration} from './registration.reducer';

const rootReducer = combineReducers({
    authentication,
    alert,
    registration

});

export default rootReducer;