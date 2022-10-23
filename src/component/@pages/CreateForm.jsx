import React,{useState,useEffect} from 'react'
import axios from 'axios'
const CreateForm = () => {
  const titleRef = React.createRef()
  const defRef = React.createRef()
  const priceRef = React.createRef()

  const [file, setFile] = useState({});
  const [message,setMessage] = useState(""); 
  async function  handleSubmit(e){
    e.preventDefault();
    let dataValue ={
     title:titleRef.current.value,
     des:defRef.current.value,
     price:priceRef.current.value,
    }
    let formData = new FormData();
 
    formData.append("data",JSON.stringify(dataValue))
    formData.append("image",file.file)
   
  const res = await  axios({
     url:"http://127.0.0.1:8000/product",
     method:"post",
     data:formData
   })
  setMessage(res.data.message)
 }
  return (
<div className='p-10'>
  <h1 className='text-center text-3xl'>Product Create</h1>
 {message}
   <form onSubmit={handleSubmit} >
      <div className='p-2 border'>
      <input type="text" ref={titleRef}   placeholder='title' />

      </div>
      <div className='p-2 border'>
      <input type="text" ref={defRef} placeholder='description'/>
      </div>
      <div className='p-2 border'>
      <input type="text" ref={priceRef} placeholder="price" />

      </div>
      <input type="file" 
        onChange={(e)=>{
           setFile({file:e.target.files[0]})
        }}
      />
      <button className='p-2 bg-slate' type='submit' 
      
      > submit</button>
  </form>
</div>
  )




}

export default CreateForm
