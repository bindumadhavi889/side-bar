import {FaBars} from 'react-icons/fa'
import { GlobalContext } from './context'
const Home = () => {
  const {sidebarOpen,modalOpen} = GlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={sidebarOpen}>
        <FaBars/>
      </button>
      <button className='btn' onClick={modalOpen}>show modal</button>
    </main>
  )
}
export default Home