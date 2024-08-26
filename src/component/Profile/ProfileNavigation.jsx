import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authentication/Action';

const menu=[
    {title:"Orders",icon:<ShoppingBagIcon/>},
    {title:"Address",icon:<HomeIcon/>},
    {title:"Payments",icon:<AccountBalanceWalletIcon/>},
    {title:"Notification",icon:<NotificationsIcon/>},
    {title:"Event",icon:<EventIcon/>},
    {title:"Logout",icon:<LogoutIcon/>}
]

const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen = useMediaQuery("max-width:600px")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleNavigate=(item)=>{
        if (item.title === "Logout"){
            dispatch(logout())
            navigate("/")
        }
        else 
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
  return (
    <div>
        <Drawer 
            variant={isSmallScreen ? "temporary":"permanent"} 
            onClose={handleClose} 
            open={isSmallScreen ? open : true} 
            anchor='left' 
            sx={{zIndex:-1, position:'sticky'}}
        >
            <div className='w-[25vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16 '>
                {menu.map((item,i)=> <>
                <div onClick={()=>handleNavigate(item)}  className='px-5 flex items-center space-x-5 cursor-pointer'>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                {i!==menu.length-1 && <Divider/>}
                </>)}
            </div>
        </Drawer>
    </div>
  )
}

export default ProfileNavigation