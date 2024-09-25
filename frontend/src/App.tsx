
import { RecoilRoot } from 'recoil'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Writeblog } from './pages/WriteBlog'
import { FullBlog } from './pages/FullBlog'
import ProtectedRoute from './components/ProtectedRoute'

function App() {


  return (
    <>

    <RecoilRoot>
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/blogs" element={<ProtectedRoute element={<Blog />} />} />
          <Route path="/writeblog" element={<ProtectedRoute element={<Writeblog />} />} />
          <Route path="/blog/:id" element={<ProtectedRoute element={<FullBlog />} />} />
        </Routes>
      </BrowserRouter>

    </RecoilRoot>
      
    </>
  )
}

export default App
