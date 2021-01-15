import axios from 'axios';
import {Dispatch} from 'redux';
import {history} from '../../store';
import {AutoPurchase, AUTO_CREATE, AUTO_CREATE_FAIL} from './AutoActionsTypes'
const url = process.env.REACT_APP_URL;

// Types

export const AutoCreate = (data: AutoPurchase) => async (dispatch: Dispatch) => {
    try {
        const res = (await axios.post(url + 'api/auto', data)).data;
        if(res.success) {
            dispatch({
                type: AUTO_CREATE,
                payload: res.data
            })

            history.replace('/register')
        } else {
            dispatch({
                type: AUTO_CREATE_FAIL,
                payload: res.errors
            })
        }
    } catch (err) {

    }
  
} 
