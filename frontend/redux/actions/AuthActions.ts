import axios from 'axios';
import {Dispatch} from 'redux';
import {AUTH_REGISTER, AUTH_REGISTER_FAIL} from './AuthActionsTypes';

export const AuthRegister = (data: object) => async (dispatch: Dispatch) => {
    try {
        const res = await axios.post('/api/register', data);

        if(res.data.success) {
            dispatch({
                type: AUTH_REGISTER,
                payload: res.data.data
            })
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
