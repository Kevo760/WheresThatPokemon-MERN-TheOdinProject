import { createContext, useEffect, useReducer } from "react";

export const SelectBoxContext = createContext()


export const selectBoxReducer = (state, action) => {
    switch(action.type) {
        case 'DISPLAY':
            return { showSelectionBox: true }
        case 'HIDE': 
            return { showSelectionBox: false }
        default:
            return state
        
    }
}

export const SelectBoxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(selectBoxReducer, {
        showSelectionBox: false
    });

    return (
        <SelectBoxContext.Provider value={{...state, dispatch}}>
            {
                children
            }
        </SelectBoxContext.Provider>
    )
}
