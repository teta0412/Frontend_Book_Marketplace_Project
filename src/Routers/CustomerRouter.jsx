import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from '../component/Auth/Auth'
import Cart from '../component/Cart/Cart'
import Home from '../component/Home/Home'
import { Navbar } from '../component/Navbar/Navbar'
import { PaymentSuccess } from '../component/PaymentSuccess/PaymentSuccess'
import Profile from '../component/Profile/Profile'
import StoreDetails from '../component/Store/StoreDetails'

export const CustomerRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/account/:register' element={<Home/>}></Route>
            <Route path='/store/:city/:title/:id' element={<StoreDetails/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/my-profile/*' element={<Profile/>}></Route>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}></Route>
        </Routes>
        <Auth/>
    </div>
  )
}
