import { useUser } from "../../hooks/useUser"
import { FollowButton } from "./FollowButton"
import { useModal } from "../../hooks/useModal"

export const Follow = () => {

  const { usersData } = useUser()
  const { click, updateClick } = useModal()

  return (
    <div className="flex flex-col rounded-[10px] bg-[rgb(22_24_28)] ml-[20px] mt-[20px] mr-[20px] w-[90%] py-[10px]">
      <h1 className="font-bold text-[21px] ml-[10px] mb-[10px]">Who to Follow</h1>
      <div className="flex flex-col w-full">
        {
          usersData.slice(0, click ? usersData.length : 3).map((us) => (
            <div className="flex flex-row p-[10px] w-full justify-center hover:cursor-pointer hover:bg-sky-950" key={us.id}>
              <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""
                className="w-[40px] h-[40px] rounded-[50px] mr-[5px]" />
              <div className="flex flex-col mr-auto">
                <h1 className="font-bold">{us.name}</h1>
                <h2 className="text-zinc-400">@{us.username.toLowerCase()}</h2>
              </div>
              <FollowButton />
            </div>
          ))
        }
        <p onClick={updateClick} className="text-sky-600 hover:cursor-pointer ml-[20px]">Show More</p>
      </div>
    </div>
  )
}