/* eslint-disable react/prop-types */
import { Interaction } from "./Interaction"
import { Users } from "./Users"

export const Post = ({ name, username, post }) => {

  return (
    <article className="flex flex-col w-full h-[200px] border-b-[1px] border-solid border-zinc-700">
      <div className="flex flex-col">
        <div className="flex items-center">
          <Users name={name} username={username} />
        </div>
        <p className="text-[15px] font-semibold mt-[10px] w-[90%] ml-[10px]">{post}</p>
      </div>
      <Interaction />
    </article>
  )
}