import { createContext, useEffect, useReducer } from "react";


export const MsgSelectContext = createContext();

export const MsgSelectReducer = (state, action) => {
    switch(action.type) {
        case 'SHOWFOUND':
            return {
                showMsg: true,
                found: true
            }
        case 'SHOWNOTFOUND':
            return {
                showMsg: true,
                found: false
            }
        case 'HIDE':
            return {
                showMsg: false
            }
        default:
            return
    }
}



export const MsgSelectProvider = ({children}) => {
    const [state, dispatchMsgSelect] = useReducer(MsgSelectReducer, {
        showMsg: false
    })

    useEffect(() => {

        // Sets timeout to hide message
        const msgFadeaway = () => {
            setTimeout(() => dispatchMsgSelect({ type: 'HIDE'}), 1000);
        }
        
        if(state.showMsg) {
            
            msgFadeaway();
        }

        return () => {
            clearTimeout(msgFadeaway);
        }
    })

    return (
        <MsgSelectContext.Provider value={{...state, dispatchMsgSelect}}>
            {
                children
            }
        </MsgSelectContext.Provider>
    )
}