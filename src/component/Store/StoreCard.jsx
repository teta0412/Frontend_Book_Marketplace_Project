
import { Card, Chip } from '@mui/material'
import React from 'react'

const StoreCard = () => {
  return (
    <Card className = 'w-[18rem]'>
      <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
      <img 
            className='w-full h-[10rem] rounded-t-md object-cover' 
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png" 
            alt="" />
      <Chip size = "small"
            className="absolute top-2 left-2"
            color={true?"success":"error"}
            label={true?"open":"closed"}>

      </Chip>

      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
          <div className='space-y-1'>
            <p className='font-semibold text-lg'>Fahasa</p>
            <p className='text-gray-500 text-sm'>
              Buy everything you need with a single click
            </p>
          </div>
        </div>
    </Card>
  )
}

export default StoreCard
