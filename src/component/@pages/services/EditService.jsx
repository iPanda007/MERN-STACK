import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useParams} from "react-router-dom"

const EditService = () => {
  const initialState = {
      title:"",
      des:"",
      price:"",
  }
 const params = useParams();
 //state
 const [formValue,setFormValue] =useState(initialState);
 const [file,setFile] = useState(null)
 //ref
 const titleRef = useRef(null);
 const desRef  = useRef(null);
 const priceRef = useRef(null)

//navigate

const navigate = useNavigate();

function fetchData(){

  axios.get('http://localhost:8000/services/'+params.id).then(function(res){
       setFormValue({
         title: res.data[0].title,
         des:res.data[0].description,
       })

  })
}

useEffect(()=>{
   fetchData()
   console.log("params",params)
},[])

const sendData =async (e)=>{
      e.preventDefault();
     const pathData = {
        title: titleRef.current.value,
        des:desRef.current.value,
     }
     const formData = new FormData();
     formData.append("data",JSON.stringify(pathData))
     formData.append("image",file)
     const res = axios({
      url:'http://localhost:8000/services/'+params.id,
      method:"post",
      data:formData,
      headers:"application/json; charset=utf-8"
     })
     navigate('/servicelist')
}

  return (
    <div >
     <h1 className='text-4xl text-center'>Edit Service</h1>
<div className='p-10'>

  <form onSubmit={sendData} >
      <div className='p-2 border'>
      <input type="text" ref={titleRef} defaultValue={formValue.title}  placeholder='title' />
      </div>
    <div className='p-2 border'>
    <input type="text" ref={desRef} defaultValue={formValue.des}  placeholder='description'/>
    </div>

     <input type="file"
       onChange={(e)=>setFile(e.target.files[0])
    }
     />
     <button
     className='p-2 bg-slate-400' type='submit' 
     
     > submit</button>
 </form>
</div>
    </div>
  )
}

export default EditService
