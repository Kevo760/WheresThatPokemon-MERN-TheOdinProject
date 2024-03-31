import { useContext } from "react";
import { ScoreDataContext } from "../context/ScoreDataContext";



export const useSelectBox = () => {
    const context = useContext(ScoreDataContext);

    if(!context) {
        throw Error('useScoreData must be used inside ScoreDataProvider')
    };

    return context
}