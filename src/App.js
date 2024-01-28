import React from 'react'
import Home from './components/home/Home'
import BlogForm from './components/blog_form/BlogForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blogform' element={<BlogForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
