import { createContext, useEffect, useReducer } from "react";

export const ScoreDataContext = createContext();

export const ScoreDataReducer = (state, action) => {
    switch(action.type) {
        case 'GET_SCORE':
           return {
                getScore: true,
                scoreID: null,
                scoreError: false
            }
        case 'SET_DATA':
            return {
                getScore: false,
                scoreID: action.payload,
                scoreError: false
            }
        case 'SET_ERROR':
            return {
                getScore: false,
                scoreID: null,
                scoreError: action.payload
            }
        case 'DELETE_DATA': 
            return {
                getScore: false,
                scoreID: null,
                scoreError: false
            }
        default: 
            return state
    }
}


export const ScoreDataProvider = ({children}) => {
    const [state, dispatchScoreData] = useReducer(ScoreDataReducer, {
        getScore: false,
        scoreID: null,
        scoreError: false
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
                    dispatchScoreData({type: 'SET_DATA', payload: json._id})
                }

            } catch(err) {

                dispatchScoreData({type: 'SET_ERROR', payload: 'Something went wrong, try again.'})
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