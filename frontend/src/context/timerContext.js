import { createContext, useEffect, useReducer } from "react";

export const TimerContext = createContext();

export const TimerReducer = (state, action) => {
    switch(action.type) {
        case 'START': 
            return {
                time: action.payload
            }
        case 'RESET':
            return {
                time: 0
            }
        default:
            return state
    }
};

export const TimerProvider = ({children}) => {
    const [state, dispatch] = useReducer(TimerReducer, {
        time: 0
    })

    let startTime = new Date()

    useEffect(() => {
        let interval = setInterval(() => {
            // Fixes issues where timer stop when tab is inactive
            const left = state.time + (new Date() - startTime)
            dispatch({type: "START" , payload: left + 10})
        }, 10);

        return () => clearInterval(interval);
    })

    return (
        <TimerContext.Provider value={{...state, dispatch}}>
            {
                children
            }
        </TimerContext.Provider>
    )
}