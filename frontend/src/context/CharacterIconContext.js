import { createContext, useReducer, useState } from "react";

export const CharacterIconContext = createContext();

export const CharIconReducer = (state, action) => {
    switch(action.type) {
        case 'spearow':
            return {
                ...state,
                spearowFound: true
            }
        case 'darumaka':
            return {
                ...state,
                darumakaFound: true
            }
        case 'galvantula':
            return {
                ...state,
                galvantulaFound: true
            }
        default: 
            return state

    }
}

export const CharacterIconProvider = ({children}) => {
    const [state, dispatchCharacterIcon] = useReducer(CharIconReducer, {
        spearowFound: false,
        darumakaFound: false,
        galvantulaFound: false,
    })

    useState(() => {

    })

    return (
        <CharacterIconContext.Provider value={{...state, dispatchCharacterIcon}}>
            {
                children
            }
        </CharacterIconContext.Provider>
    )
}