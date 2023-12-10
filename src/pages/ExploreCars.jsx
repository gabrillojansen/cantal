import React, { useContext } from 'react'
import { CantalContext } from '../context/CantalContext'
import CantalItem from '../components/CantalCar'
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const ExploreCars = () => {
    const { CARS } = useContext(CantalContext)
  return (
    <div className="mx-auto mt-32 px-4 sm:max-w-[640px] md:lg:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]">
        <h1 className="text-3xl text-[#2C3E50] font-extrabold">Choose the right lease</h1>
        <div className="w-full bg-[#EAECEE] border border-solid border-[#FDFEFE] p-4 shadow-lg rounded-2xl flex gap-12 mt-12">
            <div className="flex items-center  relative">
                <input
                type="text"
                placeholder="Search..."
                className="p-2 pl-4 pr-10 bg-[#FBFCFC] border border-solid border-[#FDFEFE] rounded-xl outline-none focus:border-[#27AE60]"/>
                <CiSearch className="absolute right-4 cursor-pointer"/>
            </div>
            <select className="bg-transparent outline-none cursor-pointer text-[13px]">
                <option value="">Relevance</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
            <select className="bg-transparent outline-none cursor-pointer text-[13px]">
                <input type="text" />
                <option value="">All brands</option>
                <option value="">Audi</option>
                <option value="">BMW</option>
                <option value="">Cadillac</option>
                <option value="">Chervrolet</option>
                <option value="">Dodge</option>
                <option value="">Ferrari</option>
                <option value="">Ford</option>
                <option value="">Honda</option>
                <option value="">Hyundai</option>
            </select>
        </div>
        
        <div className="w-full flex items-center justify-center mt-[3rem]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {CARS.map((CAR) => {
              return <CantalItem carData={CAR}/>
            })}
          </div>
        </div>

        <div className="w-full text-[#2C3E50] bg-[#EAECEE] border border-solid border-[#FDFEFE] p-4 flex items-center justify-between shadow-lg rounded-2xl mt-12">
            <div className="">
                <p>6 from 129</p>
            </div>
            <div className="flex gap-4">
                <button className="p-2 shadow-lg rounded-lg">
                    <FaArrowLeft/>
                </button>
                <button className="p-2 shadow-lg rounded-lg">
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    </div>
  )
}
