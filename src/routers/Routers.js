
import React from 'react'
import {Routes,Route, Navigate } from "react-router-dom"
import Home from './../pages/MainPage/Main';

import  ActionPage  from './../pages/ActionPage/ActionPage';

const Routers = () => {
  return (
    
    <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/action' element={<ActionPage/>}/>  
    </Routes>
  
  )
}

export default Routers