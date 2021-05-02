import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content"
import SideBar from "./components/SideBar"

const App = () => {
  const [dark, setDark] = useState('disable');

  const handleDark = () => {
    if(dark === 'enable') {
      setDark('disable');
      localStorage.setItem('dark','disable')
    }else if(dark === 'disable') {
      setDark('enable');
      localStorage.setItem('dark','enable')
    }
  }
  
  useEffect(() => {
    const mode = localStorage.getItem('dark')
    if(mode){
      setDark(mode)
    } else{
      const created = localStorage.setItem('dark','disable');
      setDark(created)
    }
  }, [])

  return(
    <BrowserRouter>
    <div className={`${dark === 'enable' ? 'dark' : ''} grid grid-cols-12 gap-6 py-14 px-5 sm:px-10 md:px-28 lg:px-36`}>
      <div className="col-span-12 lg:col-span-3 bg-white dark:bg-black rounded-2xl">
        <SideBar dark={dark} handleDark={handleDark}/>
      </div>
      <div className="col-span-12 lg:col-span-9 bg-white dark:bg-dark-500 rounded-2xl overflow-hidden">
        <Content />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
