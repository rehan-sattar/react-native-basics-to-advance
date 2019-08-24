import React, { useReducer } from 'react'
/**
 * @description generic context wrapper for all kind of contexts
 * @argument reducer  Reducer function.
 * @argument actions Set of functions (action creators) for reducer. type object
 * @argument initialState Reducer's initial state type any
 */

export default (reducer, actions, initialState) => {
  const Context = React.createContext()
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}
