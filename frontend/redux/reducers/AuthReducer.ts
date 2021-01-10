import { AUTH_REGISTER, AUTH_REGISTER_FAIL } from '../actions/AuthActionsTypes';
interface DefaultStateRegister {
    success: boolean,
    errors?: object,
    user: object
}

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

const authReducer = (state: DefaultStateRegister = DefaultStateRegister, action: any) : DefaultStateRegister => {
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
        default:
            return state
    }
}

export default authReducer;
