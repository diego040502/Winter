import { Post } from "./Post"
import { Icons } from "../Main/Icons"
import { useForm } from "../../hooks/useForm"

export const ListPost = () => {
  
  const { post, input, handleChange, handleSubmit } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full border-solid border-zinc-700 border-t-[1px] border-b-[1px]">
        <section className="flex flex-row mt-[10px] w-full">
          <img src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="" className="w-[40px] h-[40px] rounded-[50px] ml-[10px]" />
          <textarea value={input} onChange={handleChange} className="border-none resize-none ml-[10px] bg-transparent text-[20px] text-zinc-400" placeholder="What is Happening?!"></textarea>
        </section>
        <section className="flex flex-row">
          <Icons />
          <button onClick={handleSubmit} className="bg-sky-600 font-bold w-[75px] h-[40px] rounded-[20px] mr-[20px] mb-[10px]">Post</button>
        </section>
      </form>
      {
        post.map((us) => (
          <Post key={us.id} name={us.name} username={us.username} post={us.post} />
        ))
      }
    </>
  )
}