import { useInteraction } from "../../hooks/useInteraction"
import {
  IconHeart, IconMessageCircle2, IconRepeat,
  IconChartBar, IconShare3, IconHeartFilled
} from '@tabler/icons-react'


export const Interaction = () => {

  const { liked, repeated, counterReplies, counterRepeat, counterLikes,
    counterStatistics, addLikes, addRetweet } = useInteraction()

  return (
    <>
      <div className="w-full flex flex-row mt-auto mb-[10px] items-center justify-between">
        <div className="flex flex-row">
          <IconMessageCircle2 className='w-[15px] h-[20px] mx-[20px] hover:cursor-pointer' />
          {counterReplies}
        </div>

        <div className="flex flex-row">
          {
            repeated ? (<IconRepeat className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer text-green-600' onClick={addRetweet} />) :
              (<IconRepeat className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' onClick={addRetweet} />)
          }
          {counterRepeat}
        </div>
        <div className="flex flex-row">
          {
            liked ? (<IconHeartFilled className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' onClick={addLikes} />) :
              (<IconHeart className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' onClick={addLikes} />)
          }
          {counterLikes}
        </div>
        <IconChartBar className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' /> {counterStatistics}
        <IconShare3 className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' />
      </div>
    </>
  )
}