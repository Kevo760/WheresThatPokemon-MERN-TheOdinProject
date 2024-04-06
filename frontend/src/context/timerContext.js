import { createContext, useEffect, useReducer } from "react";

export const TimerContext = createContext();

export const TimerReducer = (state, action) => {
    switch(action.type) {
        case 'START': 
            return {
                ...state,
                start: true,
            }
        case 'TIMER':
            return {
                ...state,
                time: action.payload
            }
        case 'STOP': 
            return {
                ...state,
                start: false
            }
        case 'RESET':
            return {
                start: false,
                time: 0
            }
        default:
            return state
    }
};

export const TimerProvider = ({children}) => {
    const [state, dispatchTimer] = useReducer(TimerReducer, {
        start: true,
        time: 0
    });

    let startTime = new Date();

    useEffect(() => {

        if(!state.start) {
            return;
        }

        let interval = setInterval(() => {
            // Fixes issues where timer stop when tab is inactive
            const left = state.time + (new Date() - startTime)
            dispatchTimer({type: "TIMER" , payload: left + .50})
        }, 10);

        return () => clearInterval(interval);
    })

    return (
        <TimerContext.Provider value={{...state, dispatchTimer}}>
            {
                children
            }
        </TimerContext.Provider>
    )
}