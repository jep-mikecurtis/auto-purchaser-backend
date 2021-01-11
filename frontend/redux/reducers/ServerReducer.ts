import {ServerDefaultState, ServerDispatchType, SERVER_ERROR} from '../actions/ServerActionsTypes'

const DefualtState = {
    error: null
}

const serverReducer = (state: ServerDefaultState = DefualtState, action: ServerDispatchType) => {
    switch(action.type) {
        case SERVER_ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }
}

export default serverReducer
