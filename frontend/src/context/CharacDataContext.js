import { createContext, useEffect, useReducer } from "react";

export const CharacDataContext = createContext();

export const CharacDataReducer = (state, action) => {
    switch(action.type) {
        case 'GET_DATA': 
            return {
                spearow: null,
                darumaka: null,
                galvantula: null,
                getData: true,
                error: false
            }
        case 'SET_ERROR': 
            return {
                spearow: null,
                darumaka: null,
                galvantula: null,
                getData: true,
                error: action.payload
            }
        case 'SET_DATA': 
            return {
                spearow: action.payload.spearow,
                darumaka: action.payload.darumaka,
                galvantula: action.payload.galvantula,
                getData: false,
                error: false
            }
        case 'DELETE_DATA':
            return {
                spearow: null,
                darumaka: null,
                galvantula: null,
                getData: false,
                error: false
            }
        default:
            return state
    }
}

export const CharacDataProvider = ({children}) => {
    const [state, dispatchCharacData] = useReducer(CharacDataReducer, {
        spearow: null,
        darumaka: null,
        galvantula: null,
        getData: true,
        error: false
    });

    useEffect(() => {
        
        const fetchCharacData = async() => {
            try {

                const res = await fetch('/locations/', {
                        method: 'GET'
                    });

                const json = await res.json();

                if(!res.ok) {
                    throw Error('Something went wrong, try again.')
                }

                if(res.ok) {

                    let spearow = json.find((e) => e.name === 'spearow')
                    let darumaka = json.find((e) => e.name === 'darumaka')
                    let galvantula = json.find((e) => e.name === 'galvantula')
                    
                    dispatchCharacData({type: 'SET_DATA', payload: {spearow, darumaka, galvantula}})
                }

            } catch(err) {
                
                dispatchCharacData({type: 'SET_ERROR', payload: err})
            }
        }

        if(state.getData === true) {
            fetchCharacData()
        }

       
    }, [state])


    return (
        <CharacDataContext.Provider value={{...state, dispatchCharacData}}>
            {
                children
            }
        </CharacDataContext.Provider>
    )
}