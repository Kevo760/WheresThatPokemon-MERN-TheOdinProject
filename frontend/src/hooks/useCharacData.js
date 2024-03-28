import { useContext } from "react";
import { CharacDataContext } from "../context/CharacDataContext";

export const useCharacData = () => {
    const context = useContext(CharacDataContext)

    if(!context) {
        throw Error('useCharacData must be used on CharacDataProvider')
    }

    return context
}