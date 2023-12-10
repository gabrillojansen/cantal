import React, { useContext } from 'react'
import { CantalContext } from '../context/CantalContext'
import CantalItem from '../components/CantalCar'

export const ExploreCars = () => {
    const { CARS } = useContext(CantalContext)
  return (
    <div className="m-auto px-4 sm:max-w-[640px] md:lg:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]">
        <h1 className="text-3xl text-[#2C3E50] font-extrabold">Featured Cars</h1>
        <div className="w-full flex items-center justify-center mt-[3rem]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {CARS.map((CAR) => {
              return <CantalItem carData={CAR}/>
            })}
          </div>
        </div>
    </div>
  )
}
