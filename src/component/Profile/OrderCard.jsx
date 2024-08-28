import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = ({order}) => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            {/* <img 
                className='h-16 w-16'
                src={i.book?.images[0]}
                alt="" /> */}
            <div>
            <p className='text-xl font-semibold text-gray-400'>Order ID {order?.id}</p>
            <p>{order?.totalPrice}$</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed text-2xl font-semibold text-gray-400'>{order?.orderStatus}</Button>
        </div>

    </Card>
  )
}
