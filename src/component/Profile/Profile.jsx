import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getUsersOrders } from '../State/Order/Action'
import Address from './Address'
import Events from './Events'
import Orders from './Orders'
import ProfileNavigation from './ProfileNavigation'
import UserProfile from './UserProfile'

const Profile = () => {

    const [openSideBar,setOpenSideBar] = useState(false)
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>
        </div>
        <div className='lg:w-[80%]'>
            <Routes>
                <Route path='/' element={<UserProfile/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/address' element={<Address/>}/>
                <Route path='/payments' element={<UserProfile/>}/>
                <Route path='/notification' element={<UserProfile/>}/>
                <Route path='/event' element={<Events/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Profile