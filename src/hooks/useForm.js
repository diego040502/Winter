import { useState } from "react"
import { posts } from '../helpers/posts.js'

export const useForm = () => {
  const [post, setPost] = useState(posts)
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      id: crypto.randomUUID(),
      name: 'Cod3r_',
      username: 'diego_c0405',
      post: input
    }
    const temp = [...posts]
    temp.unshift(newPost)
    setPost(temp)
  }
  return { post, input, handleChange, handleSubmit }
}