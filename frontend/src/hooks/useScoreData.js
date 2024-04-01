import { useContext } from "react";
import { ScoreDataContext } from "../context/ScoreDataContext";



export const useScoreData= () => {
    const context = useContext(ScoreDataContext);

    if(!context) {
        throw Error('useScoreData must be used inside ScoreDataProvider')
    };

    return context
}