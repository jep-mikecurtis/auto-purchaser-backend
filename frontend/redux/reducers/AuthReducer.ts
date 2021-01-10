
interface DefaultState {
    auth: object
}

const DefaultState = {
    auth: {}
}

const authReducer = (state: DefaultState = DefaultState, action: any) : DefaultState => {
    switch(action.type) {
        default:
            return state
    }
}

export default authReducer;
