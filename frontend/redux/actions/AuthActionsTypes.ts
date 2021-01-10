// Register Actions
export const AUTH_REGISTER = "AUTH_REGISTER";
export const AUTH_REGISTER_FAIL = "AUTH_REGISTER_FAIL";
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";

// Logout Actions
export const AUTH_LOGOUT = "AUTH_LOGOUT";

// Login Action
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGIN_FAIL = "AUTH_LOGIN_FAIL";

// Default State
export interface DefaultStateRegister {
  success: boolean;
  errors?: object;
  user: object;
}

//  Register Interface
export interface AUTH_REGISTER {
  type: typeof AUTH_REGISTER;
  payload: DefaultStateRegister;
}

export interface AUTH_REGISTER_FAIL {
  type: typeof AUTH_REGISTER_FAIL;
  payload: DefaultStateRegister;
}

export interface AUTH_REGISTER_SUCCESS {
  type: typeof AUTH_REGISTER_SUCCESS;
}

export interface AUTH_LOGOUT {
    type: typeof AUTH_LOGOUT;
    payload: DefaultStateRegister;
}
// Login Interface
export interface AUTH_LOGIN {
    type: typeof AUTH_LOGIN;
    payload: DefaultStateRegister;
}

export type AuthDispatchTypes =
  | AUTH_REGISTER
  | AUTH_REGISTER_FAIL
  | AUTH_LOGIN
  | AUTH_LOGOUT;
