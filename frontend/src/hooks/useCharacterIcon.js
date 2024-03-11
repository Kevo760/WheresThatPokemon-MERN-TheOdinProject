import { useContext } from "react";
import { CharacterIconContext } from "../context/CharacterIconContext";

export const useCharacterIcon = () => {
    const context = useContext(CharacterIconContext)

    if(!context) {
        throw Error('useCharaterIcon must be used on CharacterIconProvider')
    }

    return context
}