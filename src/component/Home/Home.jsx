import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from '../Auth/Auth'
import { getAllStoresAction } from '../State/Store/Action'
import StoreCard from '../Store/StoreCard'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'
const stores = [1,1,1,1,1,1,1]
const Home = () => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {store} = useSelector(store=>store)
    useEffect(()=>{
        dispatch(getAllStoresAction(jwt))
    },[])
  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Teta Book Store</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Open your mind: Book, Knowledge and Delivered</p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'></div>
            <div className='fadout'></div>
        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Books</p>
            <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10'>
            <h1 className='text-2xl font-semibold text-gray-400 pb-8'>
                Order From Our Handpicked Favorites
            </h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                    store.stores.map((item)=><StoreCard item={item}/>)
                }
            </div>
        </section>
    </div>
  )
}

export default Home
