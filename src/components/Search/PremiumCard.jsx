/* eslint-disable react/prop-types */
export const PremiumCard = ({ handleClick }) => {
  return (
    <div className="rounded-[10px] bg-[rgb(22_24_28)] ml-[20px] mt-[20px] mr-[20px] w-[90%] p-[15px] break-normal">
      <h1 className="text-[20px] font-bold">Subscribe to Premium</h1>
      <p className="font-bold">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
      <button onClick={handleClick} className="w-[100px] text-[15px] bg-sky-600 font-bold p-[5px] mt-[10px] rounded-[20px]">Subscribe</button>
    </div>
  )
}