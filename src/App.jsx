import React,{useEffect} from 'react'
import Main from './component/Main'
import {BrowserRouter as Router, Routes,Route,useParams} from 'react-router-dom'
import { CreateForm } from './component/@pages'
import ProductList from './component/@pages/ProdictsList'
import ProductEdit from './component/@pages/ProductEdit'
const App = () => {

  return (
    <div>

        <Router>
            <Routes>
                    <Route path="/" element={<Main/>}>
                       <Route path="create" element={<CreateForm/>}/>
                       <Route path='product' element={<ProductList/>}/>
                       <Route path='product/edit/:id' element={<ProductEdit/>}/>
                    </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App
