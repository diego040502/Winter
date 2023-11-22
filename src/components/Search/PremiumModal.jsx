/* eslint-disable react/prop-types */
import { IconX } from "@tabler/icons-react"
import { useModal } from "../../hooks/useModal"
import { PremiumOptions } from "./PremiumOptions"

export const PremiumModal = ({ handleClick }) => {

  const { click, updateClick } = useModal()

  return (
    <div className="bg-black rounded-[20px] p-[20px] h-[500px] w-[600px] absolute border-solid border-[1px] border-[rgb(22_24_28)] ml-[350px] mt-[90px] flex flex-col items-center justify-center">
      <IconX onClick={handleClick} className="mr-auto mb-[20px] hover:cursor-pointer" />
      <h1 className="flex justify-center text-[30px] font-bold mb-[20px] mt-[30px]">Who are you?</h1>
      <h3>Choose the right subscription for you</h3>
      <PremiumOptions updateClick={updateClick} click={click} />
      <button className="w-[350px] h-[50px] bg-white text-black mt-[50px] font-bold rounded-[50px] hover:cursor-pointer">Subscribe</button>
      <p className="mt-[20px]">Learn more about
        <a href="https://help.twitter.com/en/using-x/x-premium" className="text-sky-600 mx-[5px]" target="blank">Premium</a>
        and
        <a href="https://help.twitter.com/en/using-x/verified-organizations" className="text-sky-600 mx-[5px]" target="blank">Verified Organizations</a></p>
    </div>
  )
}