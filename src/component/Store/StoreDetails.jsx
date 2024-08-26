import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getStoreById } from '../State/Store/Action';
import { useDispatch, useSelector } from 'react-redux';

const categories = [
    "horror",
    "academic",
    "science-fiction",
    "fantasy",
    "history",
    "romance"
]

const bookTypes = [
    {label:"All",value:"all"},
    {label:"Comic",value:"comic"},
    {label:"Novel",value:"novel"}
]

const menu=[1,1,1,1,1,1,1]

const StoreDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {auth,store} = useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")
    const {id} = useParams();
    const [bookType,setBookType] = useState("all")

    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
    console.log("store",store)
    useEffect(()=>{
        dispatch(getStoreById({jwt,storeId:id}))
    },[])

  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/horror/horror book/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src={store.store?.images[0]}
                            alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src= {store.store?.images[1]}
                            alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src={store.store?.images[2]}
                            alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>{store.store?.name}</h1>
                <p className='text-gray-500 mt-1'>{store.store?.description}</p>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon></LocationOnIcon>
                        <span>Location</span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon></CalendarTodayIcon>
                        <span>Open Hours</span>
                    </p>
                    </div>
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28 d'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:'1rem'}}>
                            Book Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='book_type' value={bookType}>
                                {bookTypes.map((item)=> (
                                <FormControlLabel 
                                    key= {item.value}
                                    value={item.value} 
                                    control={<Radio/>} 
                                    label={item.label}/> 
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider></Divider>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:'1rem'}}>
                            Book Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='book_type' value={categories}>
                                {categories.map((item)=> (
                                <FormControlLabel 
                                    key= {item}
                                    value={item} 
                                    control={<Radio/>} 
                                    label={item}/> 
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item) => <MenuCard/>)}
            </div>
        </section>
    </div>
  )
}

export default StoreDetails