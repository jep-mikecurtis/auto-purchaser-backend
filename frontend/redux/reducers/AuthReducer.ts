import { AUTH_REGISTER, AUTH_REGISTER_FAIL } from '../actions/AuthActionsTypes';
interface DefaultStateRegister {
    success: boolean,
    errors?: object,
    auth: object
}

const DefaultStateRegister = {
    success: true,
    auth: {}
}

const authReducer = (state: DefaultStateRegister = DefaultStateRegister, action: any) : DefaultStateRegister => {
    switch(action.type) {
        case AUTH_REGISTER:
            return {
                success: true,
                auth: action.payload
            };
        case AUTH_REGISTER_FAIL:
            return {
                success: false,
                errors: action.payload,
                auth: {}
            };
        default:
            return state
    }
}

export default authReducer;
