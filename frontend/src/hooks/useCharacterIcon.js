import { useContext } from "react";
import { CharacterIconContext } from "../context/CharacterIconContext";

export const useCharacterIcon = () => {
    const context = useContext(CharacterIconContext)

    if(!context) {
        throw Error('useCharacterIcon must be used on CharacterIconProvider')
    }

    return context
}