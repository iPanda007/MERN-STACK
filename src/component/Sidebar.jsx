import React from 'react'
import SidebarItem from './SidebarItem'
import { items } from '../config'
const Sidebar = () => {
  return (
    <div className='bg-white min-h-screen absolute top-0 ml-[-100%]  lg:ml-[0]  lg:w-[15%] xl:w-[20%] lg:static nuoShadow '>
         {
          items.map((item,key)=>{
           return <SidebarItem key={key} {...item}/>
          })
         }
    </div>
  )
}

export default Sidebar
