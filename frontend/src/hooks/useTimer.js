import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"

export const useTimer = () => {
    const context = useContext(TimerContext);

    if(!context) {
        throw Error('useTimer must be used with TimerContextProvider')
    };

    return context
}