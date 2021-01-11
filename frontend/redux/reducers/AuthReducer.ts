import { AUTH_REGISTER, AUTH_REGISTER_FAIL, AUTH_LOGOUT, AUTH_LOGIN, DefaultStateRegister, AuthDispatchTypes } from '../actions/AuthActionsTypes';

const DefaultStateRegister = {
    success: false,
    user: {}
}

// Check for auth user in localstorage
const auth = JSON.parse(localStorage.getItem('auth'));

// Update Defualt State With Auth User
if(auth) {
    DefaultStateRegister.success = true
    DefaultStateRegister.user = auth
}

const authReducer = (state: DefaultStateRegister = DefaultStateRegister, action: AuthDispatchTypes) : DefaultStateRegister => {
    switch(action.type) {
        case AUTH_REGISTER:
            return {
                success: true,
                user: action.payload
            };
        case AUTH_REGISTER_FAIL:
            return {
                success: false,
                errors: action.payload,
                user: {}
            };
        case AUTH_LOGOUT:
            return {
                success: false,
                user: {}
            }
        case AUTH_LOGIN:
            return {
                success: true,
                user: action.payload
            }
        default:
            return state
    }
}

export default authReducer;
