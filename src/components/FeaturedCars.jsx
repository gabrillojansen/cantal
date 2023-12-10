import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { CantalContext } from '../context/CantalContext';
import CantalItem from './CantalCar';

export const FeaturedCars = () => {
    const {CARS} = useContext(CantalContext)
    
  return (
    <div className="m-auto px-4 sm:max-w-[640px] md:lg:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl text-[#2C3E50] font-extrabold">Featured Cars</h1>
            <div className="flex  items-center gap-2 transition-[.3s] hover:mr-[-10px]">
                <Link
                to="/explore-cars"
                onClick={() => window.scrollTo(0, 0)}
                ><p className="flex items-center gap-2 text-sm cursor-pointer">View more</p></Link>
                <FaLongArrowAltRight/>
            </div>
        </div>
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
