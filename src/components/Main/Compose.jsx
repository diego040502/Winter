import { ListPost } from "../Posts/ListPost"

export const Compose = () => {
  return (
    <section className="border-solid border-r-[1px] border-l-[1px] border-zinc-700 w-full h-auto">
      <div className="w-full flex flex-col items-start justify-start mt-[10px]">
        <h1 className="font-bold text-[20px] ml-[10px]">Home</h1>
        <div className="flex m-auto w-auto mt-[30px]">
          <button className="font-semibold mr-[120px] mb-[15px]">For you</button>
          <button className="font-semibold ml-[120px] mb-[15px]">Following</button>
        </div>
      </div>
      <ListPost />
    </section>
  )
}