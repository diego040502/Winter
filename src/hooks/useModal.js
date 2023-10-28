import { useState } from "react"

export const useModal = () => {
    const [click, setClick] = useState(false)

    const updateClick = () => {
        setClick(prevState => !prevState)
    }

    return { click, updateClick }
}