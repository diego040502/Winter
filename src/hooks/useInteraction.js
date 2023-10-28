import { useState } from "react"

export const useInteraction = () => {
    const numAleatorio1 = Math.trunc(Math.random() * 1000)
    const numAleatorio2 = Math.trunc(Math.random() * 1000)

    const [counterReplies, setCounterReplies] = useState(numAleatorio1)

    const [repeated, setRepeated] = useState(false)
    const [counterRepeat, setCounterRepeat] = useState(numAleatorio2)

    const [counterLikes, setCounterLikes] = useState(numAleatorio1)
    const [liked, setLiked] = useState(false)

    const [counterStatistics, setCounterStatistics] = useState(numAleatorio2)

    const addRetweet = () => {
        setCounterRepeat(counterRepeat + 1)
        setRepeated(prevState => !prevState)
    }

    const addLikes = () => {
        setCounterLikes(counterLikes + 1)
        setLiked(prevState => !prevState)
    }

    return { liked, repeated, counterReplies, counterRepeat, counterLikes, counterStatistics, addLikes, addRetweet }
}