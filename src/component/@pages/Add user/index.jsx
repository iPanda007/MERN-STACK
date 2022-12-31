import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios'
const AddUser = () => {
    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = async (e) => {

        const setData = {
            eamil: emailRef?.current?.value,
            password:passRef?.current?.value,
        }

        const formData = new FormData();
        
        formData.append('data',JSON.stringify(setData))
    


        e.preventDefault();
        const resAwait = await axios({
            url: 'http://127.0.0.1:8000/createUser',
            method: "POST",
            data: formData
        }).then((res) => res).catch((err) => err);
     
        console.log(resAwait)
       
    }

   

    return (
        <div className='p-10'>
            <h1 className='text-center text-3xl'>Product Create</h1>
  
            <form on onSubmit={handleSubmit} >
                <div className='p-2 border'>
                    <input type="text" ref={emailRef} placeholder='email' />

                </div>
                <div className='p-2 border'>
                    <input type="text" ref={passRef} placeholder='password' />
                </div>
             
                <button className='p-2 bg-slate' type='submit'

                > submit</button>
            </form>
        </div>
    )

}

export default AddUser
