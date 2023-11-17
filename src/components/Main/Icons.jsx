import {
    IconPhoto, IconGif, IconAdjustmentsHorizontal,
    IconMoodHappy, IconCalendarTime
} from '@tabler/icons-react'

export const Icons = () => {
    return (
        <section className="flex flex-row ml-[60px] mr-auto">
            <IconPhoto className='text-sky-500 w-[19px] h-[19px] m-[10px]
            hover:cursor-pointer'/>
            <IconGif className='text-sky-500 w-[19px] h-[19px] m-[10px]
            hover:cursor-pointer'/>
            <IconAdjustmentsHorizontal className='text-sky-500 w-[19px] h-[19px] m-[10px]
            hover:cursor-pointer'/>
            <IconMoodHappy className='text-sky-500 w-[19px] h-[19px] m-[10px]
            hover:cursor-pointer'/>
            <IconCalendarTime className='text-sky-500 w-[19px] h-[19px] m-[10px]
            hover:cursor-pointer'/>
        </section>
    )
}