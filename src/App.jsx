import './assets/global.css'
import { Compose } from './components/Main/Compose'
import { Menu } from './components/Menu/Menu'
import { PremiumCard } from './components/Search/PremiumCard'
import { SearchBar } from './components/Search/SearchBar'
import { Trends } from './components/Search/Trends'
import { Follow } from './components/Search/Follow'
import { useModal } from './hooks/useModal'
import { PremiumModal } from './components/Search/PremiumModal'

function App() {

  const { click, updateClick } = useModal()

  return (
    <main className='grid grid-cols-[350px_minmax(100px,_1fr)_400px] h-full'>
      <Menu />
      <Compose />
      {
        click && <PremiumModal handleClick={updateClick} />
      }
      <section className='flex flex-col'>
        <SearchBar />
        <PremiumCard handleClick={updateClick}/>
        <Trends />
        <Follow />
      </section>
    </main>
  )
}

export default App
