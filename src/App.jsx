import React from 'react'
import './App.css'
import './index.css'
import Navbar from './Pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Register from './Pages/Register'
import Login from './Pages/Login'
import PrivateRoute from '../utils/PrivateRoute'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/products' element={<Products />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
