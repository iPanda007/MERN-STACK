import React,{useState} from 'react'
import SubMenu from './SubMenu'


const SidebarItem = ({title,childrens}) => {
  const [rotate,setRotate ] = useState(false)
  return (
    <>
      {
        childrens ? (
          <SubMenu
           rotate={rotate}
           title={title}
           childrens={childrens}
           toggleRotate={
            ()=>{
              setRotate(!rotate)
            }
           }
          />
        ):(
             null
        )
      }
    </>
  )
}

export default SidebarItem
