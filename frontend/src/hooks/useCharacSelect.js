import { useContext } from "react";
import { CharacSelectContext } from "../context/CharacSelectContext";


export const useCharacSelect = () => {
    const context = useContext(CharacSelectContext);

    if(!context) {
        throw Error('useCharacSelect must be used on CharacSelectProvider')
    }

    return context
}