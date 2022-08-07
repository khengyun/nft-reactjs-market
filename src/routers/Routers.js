
import React from 'react'
import {Routes,Route, Navigate } from "react-router-dom"
import ActionPage from '../pages/MainPage/ActionPage';
import Home from './../pages/MainPage/Main';


const Routers = () => {
  return (
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/action' element={<ActionPage/>} />
    </Routes>
  
  )
}

export default Routers