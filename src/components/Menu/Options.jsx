import {
  IconHome2, IconSearch, IconBell,
  IconMail, IconNotes, IconUsers, IconUser, IconDots
} from '@tabler/icons-react'

export const Options = () => {
  return (
    <>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconHome2 className='w-[30px] h-[30px] mr-[10px]' />Home</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconSearch className='w-[30px] h-[30px] mr-[10px]' /> Explore</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconBell className='w-[30px] h-[30px] mr-[10px]' /> Notifications</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconMail className='w-[30px] h-[30px] mr-[10px]' /> Messages</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconNotes className='w-[30px] h-[30px] mr-[10px]' /> Lists</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconUsers className='w-[30px] h-[30px] mr-[10px]' /> Communities</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><img src='https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg'
        className='hover:bg-sky-950 px-[5px] hover:rounded-[20px] w-[40px] h-[40px] mr-[10px]' /> Premium</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconUser className='w-[30px] h-[30px] mr-[10px]' /> Profile</h1>
      <h1 className="hover:bg-sky-950 px-[5px] hover:rounded-[20px] hover:cursor-pointer font-semibold text-[22px] p-[10px] flex items-center"><IconDots className='w-[30px] h-[30px] mr-[10px]' /> More</h1>
    </>
  )
}