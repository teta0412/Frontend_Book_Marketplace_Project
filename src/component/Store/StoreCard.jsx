
import { Card, Chip } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const StoreCard = ({item}) => {
  const navigate = useNavigate()
  const handleNavigateToStore = ()=>{
    if (item.open){
      navigate(`/store/${item.address.city}/${item.name}/${item.id}`)
    }
  }
  return (
    <Card className = 'w-[18rem]'>
      <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
      <img 
            className='w-full h-[10rem] rounded-t-md object-cover' 
            src={item.images[1]} 
            alt="" />
      <Chip size = "small"
            className="absolute top-2 left-2"
            color={item.open?"success":"error"}
            label={item.open?"open":"closed"}>

      </Chip>

      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
          <div className='space-y-1'>
            <p onClick={handleNavigateToStore} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
            <p className='text-gray-500 text-sm'>
              {item.description}
            </p>
          </div>
        </div>
    </Card>
  )
}

export default StoreCard
