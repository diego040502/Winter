import { IconDots } from '@tabler/icons-react'

export const User = () => {
  return (
    <button className="bg-transparent mt-[10px] flex flex-row rounded-[20px] items-center hover:bg-zinc-900 p-[5px]">
      <img src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg"
        alt="User Photo" className="w-[40px] h-[40px] rounded-[50px]" />
      <div className="flex flex-col items-start ml-[10px]">
        <h1>Cod3r_</h1>
        <p className="text-zinc-500">@diego_c0405</p>
      </div>
      <button className="rounded-[50px] ml-auto"><IconDots/></button>
    </button>
  )
}