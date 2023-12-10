import React, { useContext } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { CantalContext } from '../context/CantalContext';
import CantalItem from './CantalCar';

export const FeaturedCars = () => {
    const {CARS} = useContext(CantalContext)
    
  return (
    <div className='max-w-[1200px] h-[100vh] m-auto px-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-extrabold'>Featured Cars</h1>
            <div className='flex  items-center gap-2 transition-[.3s] hover:mr-[-10px]'>
                <p className='flex items-center gap-2 text-sm cursor-pointer'>View more</p>
                <FaLongArrowAltRight/>
            </div>
        </div>
        <div className='flex items-center justify-center mt-[3rem]'>
        <div className='grid grid-cols-3 gap-8'>
          {CARS.map((CAR) => {
            return <CantalItem carData={CAR}/>
          })}
        </div>
        </div>
    </div>
  )
}
