import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'>
            <div>
                <img 
                    className='w-[5rem] h-[5rem] object-cover' 
                    src="https://product.hstatic.net/200000343865/product/1_d295818bf0c54c01a64027f9c986b891_master.jpg" 
                    alt="" />
            </div>
            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>Solo Leveling</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-1'>
                            <IconButton>
                                <RemoveCircleOutlineIcon/>
                            </IconButton>
                            <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                {5}
                            </div>
                            <IconButton>
                                <AddCircleOutlineIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <p>45$</p>
            </div>
        </div>
    </div>
  )
}
