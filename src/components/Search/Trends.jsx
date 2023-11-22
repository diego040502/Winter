import { IconDots } from "@tabler/icons-react"
import { trends } from '../../helpers/trends.js'

export const Trends = () => {

  return (
    <section className="mt-[10px] w-[90%] h-auto bg-[rgb(22_24_28)] ml-[20px] mr-[20px] rounded-[10px]">
      <h1 className="text-[21px] font-bold ml-[10px] p-[10px]">Trends for you</h1>
      {
        trends.map((trend) => (
          <div key={trend.id} className="p-[10px] hover:cursor-pointer 
          hover:bg-[rgb(22_34_38)] flex flex-row">
            <div className="ml-[10px]">
              <p className="text-zinc-500 text-[14px]">{trend.header}</p>
              <h1 className="font-bold">{trend.title}</h1>
              <p className="text-zinc-500 text-[14px]">{trend.subtitle} posts</p>
            </div>
            <IconDots className="ml-auto text-zinc-400 w-[18 px] h-[18px] hover:text-sky-600" />
          </div>
        ))
      }
    </section>
  )
}