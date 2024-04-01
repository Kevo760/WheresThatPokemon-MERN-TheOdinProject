import { createContext, useReducer } from "react";

export const CharacSelectContext = createContext();

export const CharacSelectReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CORD':
            return {
                x: action.payload.x,
                y: action.payload.y
            }
        case 'CLEAR_CORD':
            return {
                x: null,
                y: null
            }
        default:
            return state
    }
}

export const CharacSelectProvider = ({children}) => {
    const [state, dispatchCharacSelect] = useReducer(CharacSelectReducer, {
        x: null,
        y: null
    });

    return (
        <CharacSelectContext.Provider value={{...state, dispatchCharacSelect}}>
            {
                children
            }
        </CharacSelectContext.Provider>
    )
}