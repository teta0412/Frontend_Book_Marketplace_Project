import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

const MenuCard = ({item}) => {
  const dispatch = useDispatch()
  const handleAddItemToCart = (e)=>{
    e.preventDefault()
    const reqData ={
      token:localStorage.getItem('jwt'),
      cartItem:{
        bookId:item.id,
        quantity:1,
      }
    }
    dispatch(addItemToCart(reqData))
    console.log("req data",reqData)
  }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img 
                    className='w-[7rem] h-[10rem] object-cover' 
                    src={item.images[0]} 
                    alt="" />
                <div className='space-y-3 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>{item.name}</p>
                    <p>{item.price}$</p>
                    <p className='text-gray-400'>{item.description}</p>
                </div>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onClick={handleAddItemToCart}>
            <div>
                <Button variant='contained' disabled={false} type='submit'>
                    {true?"Add to Cart":"Out Of Stock"}
                </Button>
            </div>
          </form>
        </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard