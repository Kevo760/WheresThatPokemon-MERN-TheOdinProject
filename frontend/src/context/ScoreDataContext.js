import { createContext, useEffect, useReducer } from "react";
import { useCharacData } from "../hooks/useCharacData";

const ScoreDataContext = createContext();

const ScoreDataReducer = () => {
    switch(action.type) {
        case 'SET_DATA':
            return {
                scoreID: action.payload,
                error: false
            }
        case 'SET_ERROR':
            return {
                scoreID: null,
                error: action.payload
            }
        default: state
    }
}


const ScoreDataProvider = ({children}) => {
    const [state, dispatchScoreData] = useReducer(ScoreDataReducer, {
        scoreID: null,
        error: false
    })

    const { dispatchCharacData } = useCharacData();


    useEffect(() => {

    })


    return (
        <ScoreDataContext.Provider>
            {
                children
            }
        </ScoreDataContext.Provider>
    )
}