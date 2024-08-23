import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card >
            <CardMedia 
            sx={{height:345}}
            image='https://product.hstatic.net/200000343865/product/100---db_a84b9c5d7d2e47d09bfc246d7b94ea30_master.jpg'/>
            <CardContent>
                <Typography variant='h5' >
                    Fahasa Book Store
                </Typography>
                <Typography variant='body2' >
                    15% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"Hanoi"}</p>
                    <p className='text-sm text-blue-500'>Feb 14, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>Feb 20, 2024 12:00 AM</p>
                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
