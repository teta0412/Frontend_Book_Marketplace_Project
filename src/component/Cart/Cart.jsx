import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import { AddressCard } from './AddressCard'
import { CartItem } from './CartItem'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {createOrder} from '../State/Order/Action'
// import * as Yup from "yup"

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:"none",
    boxShadow: 24,
    p: 4,
  };
const initialValues={
    streetAddress:"",
    state:"",
    pincode:'',
    city:''
}

const Cart = () => {
    const createOrderUsingSelectedAddress = () =>{}
    const handleOpenAddressModel = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const {auth,cart} = useSelector(store => store)
    const dispatch = useDispatch()
    const handleClose = () => setOpen(false);
    const handleSubmit = (value) => {
        const data = {
            jwt:localStorage.getItem('jwt'),
            order:{
                storeId:cart.cartItems[0].book?.store.id,
                deliveryAddress:{
                    fullName:auth.user?.fullName,
                    streetAddress:value.streetAddress,
                    city:value.city,
                    state:value.state,
                    postalCode:value.pincode,
                    country:"Vietnam"
                }
            }
        }
        dispatch(createOrder(data))
    }
  return (
    <>
        <main className='lg:flex justify-between'>
            <section className='lg:w[30%] space-y-6 lg:min-h-screen pt-10'>
                {cart.cartItems.map((item)=>(
                <CartItem item={item}/>
                ))}
            <Divider/>
            <div className='billDetails px-5 text-sm'>
                <p className='font-extralight py-5'>Bill Details</p>
                <div className='space-y-3'>
                    <div className='flex justify-between text-gray-400'>
                        <p>Item Total</p>
                        <p>{cart.cart?.total}$</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Deliver Fee</p>
                        <p>21$</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Platform Fee</p>
                        <p>10$</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>GST & Store Charges</p>
                        <p>1$</p>
                    </div>
                    <Divider/>
                </div>
                <div className='flex justify-between text-gray-400'>
                    <p>Total Pay</p>
                    <p>{cart.cart?.total+ 21 + 10 + 1}$</p>
                </div>
            </div>
            </section>
            <Divider orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>
                        Choose Delivery Address
                    </h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {[1,1,1,1,1].map((item)=> 
                        <AddressCard 
                            handleSelectAddress={createOrderUsingSelectedAddress} 
                            item={item} 
                            showButton={true}/>)}
                        <Card className="flex gap-5 w-64 p-5">
                        <AddLocationAltIcon/>
                        <div className='space-y-3 text-gray-500'>
                            <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                            <Button variant='outlined' fullWidth onClick={handleOpenAddressModel}>Add</Button>
                        </div>
                    </Card>
                    </div>
                    
                </div>
            </section>
            
        </main>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
           <Formik 
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                <Form>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "streetAddress"
                        label = "Street Address"
                        fullWidth
                        variant="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg) => <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        >
                        </Field>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "state"
                        label = "State"
                        fullWidth
                        variant="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg) => <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        >
                        </Field>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "city"
                        label = "City"
                        fullWidth
                        variant="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg) => <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        >
                        </Field>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "pincode"
                        label = "Pincode"
                        fullWidth
                        variant="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg) => <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        >
                        </Field>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant='contained' type='submit' color='primary'>
                            Deliver Here
                        </Button>
                    </Grid>
                    </Grid>
                </Form>
           </Formik>
        </Box>
        </Modal>
    </>
  )
}

export default Cart