import { createContext, useReducer } from "react";

export const SelectBoxContext = createContext();


export const selectBoxReducer = (state, action) => {
    switch(action.type) {
        case 'DISPLAY':
            return { ...state,
                showSelectionBox: true,
                selectionStyle: action.payload
            }
        case 'HIDE': 
            return { showSelectionBox: false }
        default:
            return state
        
    }
};

export const SelectBoxProvider = ({ children }) => {
    const [state, dispatchShowSelection] = useReducer(selectBoxReducer, {
        showSelectionBox: false
    });

    return (
        <SelectBoxContext.Provider value={{...state, dispatchShowSelection}}>
            {
                children
            }
        </SelectBoxContext.Provider>
    )
}
