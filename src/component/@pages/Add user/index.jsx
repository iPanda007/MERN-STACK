import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios'
const AddUser = () => {
    const emailRef = useRef();
    const passRef = useRef();

    return (
        <div className='p-10'>
            <h1 className='text-center text-3xl'>Product Create</h1>
  
            <form >
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
