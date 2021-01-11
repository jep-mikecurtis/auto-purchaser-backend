export const SERVER_ERROR = 'SERVER_ERROR'

// Defualt State
export interface ServerDefaultState {
    error: string
}

// DISPATCH INTERFACE
export interface SERVER_ERROR_DISPATCH {
    type: typeof SERVER_ERROR
    payload: ServerDefaultState
}

export type ServerDispatchType = SERVER_ERROR_DISPATCH;
