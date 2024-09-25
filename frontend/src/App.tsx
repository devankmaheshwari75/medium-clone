

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Writeblog } from './pages/WriteBlog'
import { FullBlog } from './pages/FullBlog'
import ProtectedRoute from './components/ProtectedRoute'
import { MyBlogs } from './pages/MyBlogs'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<ProtectedRoute element={<Blog />} />} />
          <Route path="/writeblog" element={<ProtectedRoute element={<Writeblog />} />} />
          <Route path="/blog/:id" element={<ProtectedRoute element={<FullBlog />} />} />
          <Route path="/myblogs/" element  = {<ProtectedRoute element={<MyBlogs />} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
