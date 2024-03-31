import { createContext, useEffect, useReducer } from "react";

export const ScoreDataContext = createContext();

export const ScoreDataReducer = (state, action) => {
    switch(action.type) {
        case 'GET_SCORE':
           return {
                getScore: true,
                scoreID: null,
                error: false
            }
        case 'SET_DATA':
            return {
                getScore: false,
                scoreID: action.payload,
                error: false
            }
        case 'SET_ERROR':
            return {
                getScore: false,
                scoreID: null,
                error: action.payload
            }
        default: 
            return state
    }
}


export const ScoreDataProvider = ({children}) => {
    const [state, dispatchScoreData] = useReducer(ScoreDataReducer, {
        getScore: false,
        scoreID: null,
        error: false
    })

    useEffect(() => {

        const fetchScore = async() => {

            try {
                const res = await fetch('/scores', {
                    method: 'POST'
                });

                const json = await res.json();

                if(!res.ok) {
                    dispatchScoreData({type: 'SET_ERROR', payload: 'Something went wrong, try again.'})
                }

                if(res.ok) {
                    dispatchScoreData({type: 'SET_DATA', payload: json.__id})
                }

            } catch(err) {

                dispatchScoreData({type: 'SET_ERROR', payload: err})
            }
        }

        if(state.getScore === true) {
            fetchScore()
        }
        
    }, [state])


    return (
        <ScoreDataContext.Provider value={{...state, dispatchScoreData}}>
            {
                children
            }
        </ScoreDataContext.Provider>
    )
}