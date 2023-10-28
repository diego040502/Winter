import { useModal } from "../../hooks/useModal"

export const FollowButton = () => {

  const { click, updateClick } = useModal()


  return (
    <button className={click ?
      "hover:text-red-700 hover:border-red-700 font-semibold text-[13px] text-white bg-transparent border-solid border-[1px] border-white h-[30px] w-[80px] rounded-[20px]" :
      "text-[13px] font-semibold bg-white text-black h-[30px] w-[70px] rounded-[20px]"}
      onClick={updateClick}>
      {
        click ? 'Following' : 'Follow'
      }
    </button>
  )
}