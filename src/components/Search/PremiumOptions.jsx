/* eslint-disable react/prop-types */
export const PremiumOptions = ({ updateClick, click }) => {
  return (
    <div className="flex flex-row mt-[20px]">
      <div onClick={updateClick}
        className={click ? ("w-[200px] h-[130px] flex flex-col hover:bg-[rgb(22_24_28)] p-[15px] rounded-[20px] hover:cursor-pointer border-solid border-[1px] border-sky-600 mr-[10px]") :
          ("w-[200px] h-[130px] flex flex-col hover:bg-[rgb(22_24_28)] p-[15px] rounded-[20px] hover:cursor-pointer mr-[10px]")}>
        <h3 className="text-[14px] text-gray-500">Premium</h3>
        <h1 className="font-bold">I am individual</h1>
        <p className="text-gray-500 text-[14px]">For individuals and creators</p>
      </div>
      <div onClick={updateClick}
        className={!click ? ("w-[200px] h-[130px] flex flex-col hover:bg-[rgb(22_24_28)] p-[15px] rounded-[20px] hover:cursor-pointer border-solid border-[1px] border-sky-600") :
          ("w-[200px] h-[130px] flex flex-col hover:bg-[rgb(22_24_28)] p-[15px] rounded-[20px] hover:cursor-pointer")}>
        <h3 className="text-[14px] text-gray-500">Verified organizations</h3>
        <h1 className="font-bold">I am an organization</h1>
        <p className="text-gray-500 text-[14px]">For businesses, government agencies, and non-profits</p>
      </div>
    </div>
  )
}