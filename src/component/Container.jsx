import React from 'react' 
import { Outlet } from 'react-router-dom'
const Container = () => {
  return (
    <div className=' w-[100%] lg:w-[85%] xl:w-[80%] '>
          <Outlet/>
    </div>
  )
}

export default Container
