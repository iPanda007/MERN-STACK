import React from 'react'

const ProductEdit = () => {
  return (
    <div >
     <h1>Edit Product</h1>
<div className='p-10'>

  <form  >
     <input type="text"  placeholder='title' />
     <input type="text"  placeholder='description'/>
     <input type="text"  placeholder="price" />
     <input type="file"
     />
     <button type='submit' 
     
     > submit</button>
 </form>
</div>
    </div>
  )
}

export default ProductEdit
