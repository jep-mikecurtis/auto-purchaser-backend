import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

// REDUCERS
import authReducer from './AuthReducer';
import serverReducer from './ServerReducer';

const RootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    server: serverReducer
});

export default RootReducer;
