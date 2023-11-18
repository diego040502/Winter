/* eslint-disable react/prop-types */
import { useInteraction } from "../../hooks/useInteraction"
import {
  IconHeart, IconMessageCircle2, IconRepeat,
  IconChartBar, IconShare3, IconHeartFilled
} from '@tabler/icons-react'

const CounterReplies = ({ counterReplies }) => {
  return (
    <div className="flex flex-row">
      <IconMessageCircle2 className='w-[15px] h-[20px] mx-[20px] hover:cursor-pointer' />
      {counterReplies}
    </div>
  )
}

const CounterRepeat = ({ counterRepeat, repeated, addRetweet }) => {
  return (
    <div className="flex flex-row">
      {
        repeated ? (<IconRepeat className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer text-green-600' onClick={addRetweet} />) :
          (<IconRepeat className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' onClick={addRetweet} />)
      }
      {counterRepeat}
    </div>
  )
}

const CounterLikes = ({ liked, counterLikes, addLikes }) => {
  return (
    <div className="flex flex-row">
      {
        liked ? (<IconHeartFilled className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' onClick={addLikes} />) :
          (<IconHeart className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' onClick={addLikes} />)
      }
      {counterLikes}
    </div>
  )
}


export const Interaction = () => {

  const { liked, repeated, counterReplies, counterRepeat, counterLikes,
    counterStatistics, addLikes, addRetweet } = useInteraction()

  return (
    <>
      <section className="w-full flex flex-row mt-auto mb-[10px] items-center justify-between">
        <CounterReplies counterReplies={counterReplies} />
        <CounterRepeat counterRepeat={counterRepeat} repeated={repeated} addRetweet={addRetweet} />
        <CounterLikes counterLikes={counterLikes} liked={liked} addLikes={addLikes} />
        <IconChartBar className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' /> {counterStatistics}
        <IconShare3 className='w-[15px] h-[20px] mx-[15px] hover:cursor-pointer' />
      </section>
    </>
  )
}