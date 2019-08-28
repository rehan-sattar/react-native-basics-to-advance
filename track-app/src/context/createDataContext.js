import React, {createContext, useReducer} from 'react'

// export a function which will generate a context.
export default (reducer, actions, defaultValue) => {
    const Context = createContext()

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)
        // binding actions to dispatch here.
        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }
        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider}
}