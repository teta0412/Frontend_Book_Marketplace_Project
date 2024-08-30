import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';

export const PaymentSuccess = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen px-5'>
        <div className='flex flex-col items-center justify-center h-[90vh]'>
            <Card className='box w-1/3 lg:w1/4 flex flex-col items-center rounded-md p-5'>
                <TaskAltIcon sx={{fontSize:'5rem', color:green[500]}}/>
                <h1 className='py-5 text-2xl font-semibold'>Order Success</h1>
                <p className='py-3 text-center text-gray-400'>Thanks you for choosing our service!</p>
                <p className='py-2 text-center text-gray-200 text-lg'>Have A Great Day!</p>
                <Button onClick={()=>navigate("/")} variant='contained' className='py-5' sx={{margin:'1rem 0rem'}}>Go to Homepage</Button>
            </Card>
        </div>
    </div>
  )
}
