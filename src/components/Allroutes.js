import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Features from './Features'

import {Routes,Route} from 'react-router-dom'
import Viewport from './Viewport'

const Allroutes=()=>{
    return <div class='AllRoutes'>
        <Navbar/>
        <div class='tabs'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/features' element={<Features/>}/>
        </Routes>
        </div>
        <Viewport/>
    </div>
}

export default Allroutes