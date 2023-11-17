import { useState } from "react"

export const useInteraction = () => {

    const [counterReplies, setCounterReplies] = useState(Math.trunc((Math.random() * 1000)))

    const [repeated, setRepeated] = useState(false)
    const [counterRepeat, setCounterRepeat] = useState(Math.trunc(Math.random() * 1000))

    const [counterLikes, setCounterLikes] = useState(Math.trunc(Math.random() * 1000))
    const [liked, setLiked] = useState(false)

    const [counterStatistics, setCounterStatistics] = useState(Math.trunc(Math.random() * 1000))

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