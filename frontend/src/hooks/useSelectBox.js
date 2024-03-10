import { useContext } from "react"
import { SelectBoxContext } from "../context/SelectBoxContext"


export const useSelectBox = () => {
    const context = useContext(SelectBoxContext);

    if(!context) {
        throw Error('useSelectionBox must be used inside SelectBoxProvider')
    };

    return context
}