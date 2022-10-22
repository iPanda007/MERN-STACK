import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const ProdictsList = () => {

    const [data,setData]= useState([]);

    async function fetchData(){
      const res = await axios.get('http://localhost:8000/products')
      console.log(res)
      setData(res.data)
    }
    useEffect(()=>{
      fetchData();

    },[])
  return (
    <div>
                                <div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    # 
                </th>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Description
                </th>
                <th scope="col" className="py-3 px-6">
                   Price
                </th>
                <th scope="col" className="py-3 px-6">
                   
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item,index)=>(
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       {index+1}
                    </th>
                    <td className="py-4 px-6">
                      {item.title}
                    </td>
                    <td className="py-4 px-6">
                        {item.des}
                    </td>
                    <td className="py-4 px-6">
                        {item.price}
                    </td>
                    <td className="py-4 px-6">
                       <Link to={'/edit'+item._id}>
                       <button className='p-3 mr-2 bg-slate-500 '>Edit</button>
                       </Link>
                       <button className='p-3 bg-slate-500'>Delete</button>
                    </td>
                  
                </tr>
                ))
            }
      
        </tbody>
    </table>
</div>  
    </div>
  )
}

export default ProdictsList

