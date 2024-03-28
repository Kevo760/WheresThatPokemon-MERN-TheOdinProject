import { createContext, useReducer } from "react";

export const CharacterIconContext = createContext();

export const CharIconReducer = (state, action) => {
    switch(action.type) {
        case 'SPEAROW':
            return {
                ...state,
                spearow: true
            }
        case 'DARUMAKA':
            return {
                ...state,
                darumak: true
            }
        case 'GALVANTULA':
            return {
                ...state,
                galvantula: true
            }
        default: 
            return state

    }
}

export const CharacterIconProvider = ({children}) => {
    const [state, dispatchCharacterIcon] = useReducer(CharIconReducer, {
        spearow: false,
        darumak: false,
        galvantula: false
    })

    return (
        <CharacterIconContext.Provider value={{...state, dispatchCharacterIcon}}>
            {
                children
            }
        </CharacterIconContext.Provider>
    )
}