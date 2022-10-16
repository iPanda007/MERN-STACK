import React,{useState,useEffect} from 'react'
import axios from 'axios'
const CreateForm = () => {
  const titleRef = React.createRef()
  const defRef = React.createRef()
  const priceRef = React.createRef()

  const [file, setFile] = useState({});

  return (
<div className='p-10'>
   <form >
      <input type="text" ref={titleRef}   placeholder='title' />
      <input type="text" ref={defRef} placeholder='description'/>
      <input type="text" ref={priceRef} placeholder="price" />
      <input type="file" 
        onChange={(e)=>{
           setFile({file:e.target.files[0]})
        }}
      />
      <button type='submit' 
       onClick={(e)=>{
          handleSubmit(e,file)
       }}
      > submit</button>
  </form>
    </div>
  )
 async function  handleSubmit(e,file){
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
  console.log(res)
}



}

export default CreateForm
