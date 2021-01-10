import axios from 'axios';
import {Dispatch} from 'redux';
import {AUTH_REGISTER, AUTH_REGISTER_FAIL, AUTH_LOGOUT} from './AuthActionsTypes';
import {history} from '../../store';
import store from '../../store';

export const AuthRegister = (data: object) => async (dispatch: Dispatch) => {
    try {
        const res = await axios.post('/api/register', data);
        if(res.data.success) {
            dispatch({
                type: AUTH_REGISTER,
                payload: res.data.data
            })
            history.replace('/dashboard')
            localStorage.setItem('auth', JSON.stringify(res.data.data));
        } else {
            dispatch({
                type: AUTH_REGISTER_FAIL,
                payload: res.data.errors
            })
        }

    } catch(err) {
        console.log(err);
    }
}

export const AuthLogout = () => async (dispatch: Dispatch) => {
    try {
        const auth = store.getState().auth;
        if(auth.success) {
            const res = await axios.post('/api/logout', auth.user);
        }
    } catch(err) {
        console.log(err);
    }
}
