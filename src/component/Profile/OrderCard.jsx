import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img 
                className='h-16 w-16'
                src="https://product.hstatic.net/200000343865/product/1_d295818bf0c54c01a64027f9c986b891_master.jpg" 
                alt="" />
            <div>
            <p>Solo Leveling</p>
            <p>9$</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>Completed</Button>
        </div>

    </Card>
  )
}
