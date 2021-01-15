import axios from 'axios';
import {Dispatch} from 'redux';
import {AUTH_REGISTER, AUTH_REGISTER_FAIL, AUTH_LOGOUT, AUTH_LOGIN, RegisterType, LoginType} from './AuthActionsTypes';
import {history} from '../../store';
import store from '../../store';
import {SERVER_ERROR} from './ServerActionsTypes';
const url = process.env.REACT_APP_URL;


export const AuthRegister = (data: RegisterType) => async (dispatch: Dispatch) => {
    try {
        const res = await axios.post(url + 'api/register', data);
        if(res.data.success) {
            dispatch({
                type: AUTH_REGISTER,
                payload: res.data.data
            })

            localStorage.setItem('auth', JSON.stringify(res.data.data));
            history.replace('/dashboard')
        } else {
            dispatch({
                type: AUTH_REGISTER_FAIL,
                payload: res.data.errors
            })
        }

    } catch(err) {
        dispatch({
            type: SERVER_ERROR,
            payload: err
        })
    }
}

export const AuthLogin = (data: LoginType) => async (dispatch: Dispatch) => {
    try {
        const res = (await axios.post(url + 'api/login', data)).data;

        if(res.success) {
            dispatch({
                type: AUTH_LOGIN,
                payload: res.data
            })

            localStorage.setItem('auth', JSON.stringify(res.data));
            history.replace('/dashboard')
        } else {
            dispatch({
                type: AUTH_REGISTER_FAIL,
                payload: res.errors
            })
        }
    } catch(err) {
        dispatch({
            type: SERVER_ERROR,
            payload: err
        })
    }
}

export const AuthLogout = () => async (dispatch: Dispatch) => {
    try {
        const auth = store.getState().auth;
        if(auth.success) {
            const res = await axios.post(url + 'api/logout', auth.user);
            localStorage.removeItem('auth');
            history.replace('/')

            if(res.data.success) {
                dispatch({
                    type: AUTH_LOGOUT,
                    payload: {}
                })   
            }
        }
    } catch(err) {
        dispatch({
            type: SERVER_ERROR,
            payload: err
        })
    }
}
