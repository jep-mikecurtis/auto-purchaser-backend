import {Dispatch} from 'redux';
import {SERVER_ERROR} from './ServerActionsTypes';

export const serverLogError = () => async (dispatch: Dispatch) =>  {
    console.log('object');
    dispatch({
        type: SERVER_ERROR,
        payload: 'Server was not reached 404'
    })
}

