import { createContext, useContext, useState} from 'react'
const AppContext = createContext()
export const AppProvider = ({children}) =>{
  const [sidebar,setSidebar] = useState(false)
  const [modal,setModal] = useState(false)
  const sidebarOpen = () =>{
    setSidebar(true)
  }
  const sidebarClose = () =>{
    setSidebar(false)
  }
  const modalOpen = () =>{
    setModal(true)
  }
  const modalClose = () =>{
    setModal(false)
  }
  return (
    <AppContext.Provider value={{sidebar,modal,sidebarClose,sidebarOpen,modalClose,modalOpen}}>
      {children}
    </AppContext.Provider>
  )
}
export const GlobalContext = ()=>{
  return useContext(AppContext)
}