import React from 'react'
import axios from 'axios'
const DeleteConfirm = ({show,para,close}) => {
    
    const Delete = async ()=>{

    const res =  await   axios({
            method:"post",
            url:"http://localhost:8000/products/"+para+"/delete"
         })
         console.log(res)
         window.location.reload()
        close();
    }

  return (
    <div className={show?"transition-all duration-300 delay-300  top-0 left-0 ease-in-out absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center":"-z-10 bg-transparent"}>
        <div className={show?'bg-white p-12 scale-100 transition-all duration-300 ease-in-out':'scale-0'}>
            
                 <button
                 onClick={close}
                 className='p-2 bg-slate-400'>Cancle</button>
                 <button className='p-2 bg-red-400'
                  onClick={Delete}
                 >Delete</button>
        </div>
        
    </div>
  )
}

export default DeleteConfirm
