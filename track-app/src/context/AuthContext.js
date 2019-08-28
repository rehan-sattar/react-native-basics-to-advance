import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// actions
const signup = dispatch => {
    return ({email, password}) => {

    }
}

const signin = dispatch => {
    return ({email, password}) => {

    }
}

const signout = dispatch => {
    return () => {

    }
}

export const {
    Context,
    Provider
} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSignedIn: false}
)