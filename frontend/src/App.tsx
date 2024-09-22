

import './App.css'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import{ Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Blog} from './pages/Blog'
import { Writeblog } from './pages/WriteBlog'

function App() {
 

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path = "/signup" element={<Signup/>}></Route>
      <Route path = "/signin" element={<Signin/>}></Route>
      <Route path = "/blogs/" element={<Blog/>}></Route>
      <Route path = "/writeblog" element={<Writeblog/>}></Route>

      
    </Routes>
    
    
    
    </BrowserRouter>
    </>
  )
}

export default App
