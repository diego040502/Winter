/* eslint-disable react/prop-types */
import { IconDots } from "@tabler/icons-react"

export const Users = ({ name, username }) => {
  return (
    <>
      <img src="https://xsgames.co/randomusers/avatar.php?g=male"
        alt="" className="w-[40px] h-[40px] rounded-[50px] ml-[10px] mt-[10px]" />
      <h1 className="text-[15px] font-bold mt-[10px] ml-[10px]">{name}</h1>
      <h2 className="ml-[10px] mt-[10px] ml-[10px] text-zinc-500">@{username.toLowerCase()}</h2>
      <IconDots className="ml-auto mr-[20px] mt-[10px] hover:cursor-pointer" />
    </>
  )
}