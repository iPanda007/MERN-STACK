import React from 'react'
import Main from './component/Main'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { CreateForm } from './component/@pages'
const App = () => {
  return (
    <div>

        <Router>
            <Routes>
                    <Route path="/" element={<Main/>}>
                       <Route path="/create" element={<CreateForm/>}/>
                    </Route>
                   
            </Routes>
        </Router>
    </div>
  )
}

export default App
