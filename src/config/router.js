import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from '../views/Dashboard/Dashboard'
import Details from '../views/Details/Details'
import Post from'../views/Post/Post'
import Login from '../views/Login/Login'
import Sign from '../views/Signup/Signup'
import Cart from '../views/Cart/Cart'
function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/post' element={<Post />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>
    </Router>
  )
}

export default Routers

 