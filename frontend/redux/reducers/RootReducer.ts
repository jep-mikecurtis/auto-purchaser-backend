import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

// REDUCERS
import authReducer from './AuthReducer';
import serverReducer from './ServerReducer';
import autoReducer from './AutoReducer';

const RootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    auto: autoReducer,
    server: serverReducer,
});

export default RootReducer;
