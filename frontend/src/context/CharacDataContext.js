import { createContext, useReducer } from "react";

export const CharacDataContext = createContext();

export const CharacDataReducer = () => {
    switch(action.type) {
        case 'GET_DATA': 
            return {
                spearow: action.payload.spearow,
                darumak: action.payload.darumak,
                galvantula: action.payload.galvantula
            }
        case 'DELETE_DATA':
            return {
                spearow: null,
                darumak: null,
                galvantula: null
            }
        default:
            return state
    }
}

export const CharacDataProvider = ({children}) => {
    const [state, dispatchCharacData] = useReducer(CharacDataReducer, {
        spearow: null,
        darumak: null,
        galvantula: null
    });


    return (
        <CharacDataContext.Provider value={{...state, dispatchCharacData}}>
            {
                children
            }
        </CharacDataContext.Provider>
    )
}