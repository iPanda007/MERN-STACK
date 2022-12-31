import React, { useEffect } from 'react'
import Main from './component/Main'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { CreateForm } from './component/@pages'
import ProductList from './component/@pages/ProdictsList'
import ProductEdit from './component/@pages/ProductEdit'
import AddServices from './component/@pages/services/AddServices'
import ServiceList from './component/@pages/services/ServiceList'
import EditService from './component/@pages/services/EditService'
import AddUser from './component/@pages/Add user'
const App = () => {

  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="create" element={<CreateForm />} />
            <Route path='product' element={<ProductList />} />
            <Route path='product/edit/:id' element={<ProductEdit />} />
            <Route path='addservice' element={<AddServices />} />
            <Route path='servicelist' element={<ServiceList />} />
            <Route path='service/edit/:id' element={<EditService />} />
            <Route path='user' element={<AddUser/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
