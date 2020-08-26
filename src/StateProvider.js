import React, { createContext, useContext, useReducer} from 'react'
import App from './App';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, Children }) => (
    // console.log(Children,"Children"),
    // console.log(reducer,"reducer"),
    // console.log(initialState,"initialState"),
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        <App />
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);