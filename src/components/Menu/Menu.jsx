import { Options } from "./Options"
import { User } from "./User"

export const Menu = () => {
  return (
    <div className="w-[85%] h-[690px] flex ml-[20px] flex-col justify-center items-center">
      <img src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg"
        alt="" className="w-[50px] h-[50px] rounded-[50%] mt-[10px]" />
      <div className="flex flex-col">
        <Options/>
        <button className="bg-sky-600 font-bold text-[20px] p-[10px] rounded-[25px] w-[220px] mt-[10px]">Post</button>
        <User/>
      </div>
    </div>
  )
}