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

//  DISPATCH TYPES
export interface AUTH_REGISTER_DISPATCH {
  type: typeof AUTH_REGISTER;
  payload: DefaultStateRegister;
}

export interface AUTH_REGISTER_FAIL_DISPATCH {
  type: typeof AUTH_REGISTER_FAIL;
  payload: DefaultStateRegister;
}

export interface AUTH_REGISTER_SUCCESS_DISPATCH {
  type: typeof AUTH_REGISTER_SUCCESS;
}

export interface AUTH_LOGOUT_DISPATCH {
    type: typeof AUTH_LOGOUT;
    payload: DefaultStateRegister;
}
// Login Interface
export interface AUTH_LOGIN_DISPATCH {
    type: typeof AUTH_LOGIN;
    payload: DefaultStateRegister;
}

export type AuthDispatchTypes =
  | AUTH_REGISTER_DISPATCH
  | AUTH_REGISTER_FAIL_DISPATCH
  | AUTH_LOGIN_DISPATCH
  | AUTH_LOGOUT_DISPATCH;
