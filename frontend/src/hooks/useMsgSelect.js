import { useContext } from "react"
import { MsgSelectContext } from "../context/MsgSelectContext"

export const useMsgSelect = () => {
    const context = useContext(MsgSelectContext);

    if(!context) {
        throw Error('useMsgSelect must be used inside MsgSelectProvider')
    };

    return context
}