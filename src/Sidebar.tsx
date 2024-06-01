import { GlobalContext } from './context'
import {links,social} from './data'
import logo from './logo.svg'
import {FaTimes} from 'react-icons/fa'
const Sidebar = () => {
  const {sidebarClose,sidebar} = GlobalContext()
  return (
    <aside className={sidebar?"sidebar show-sidebar":"sidebar"}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo'/>
        <button className='close-btn' onClick={sidebarClose}>
          <FaTimes/>
        </button>
      </div>
      <ul className='links'>
        {links.map((link)=>{
          const {id,url,text,icon} = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {social.map((link)=>{
          const {id,url,icon} = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar