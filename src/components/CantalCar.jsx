import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LuUsers2 } from 'react-icons/lu';
import { LuFuel } from 'react-icons/lu';
import { TbSteeringWheel } from 'react-icons/tb';
import { RiSpeedUpFill } from 'react-icons/ri';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { GoDot, GoDotFill } from 'react-icons/go';
import { CgDetailsMore } from "react-icons/cg";

const CantalItem = (props) => {
    const {
        id,
        carImage,
        carName,
        carModel,
        carSeater,
        oilType,
        fuelEfficiency,
        carType,
        monthlyPayment 
    } = props.carData;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousButton = () => {
        setCurrentImageIndex(index => {
            if (index === 0) return carImage.length - 1
            return index - 1
        })
    }

    const handleNextButton = () => {
        setCurrentImageIndex(index => {
            if (index === carImage.length - 1) return 0
            return index + 1
        })
    }

  return (
    <div className="w-full p-4 rounded-xl bg-[#EAECEE] border border-solid border-[#FDFEFE] shadow-lg">
        <div className="flex items-center justify-between group relative overflow-hidden">
            <div className="rounded-xl">
                <div className="w-full h-[250px] relative">
                    <img src={carImage[currentImageIndex]} alt="" className="w-full h-full rounded-xl z-10"/>
                    <Link to={`/car-details/${id}`} className="absolute top-4 right-[-40px] transition-[1s] group-hover:right-[10px]">
                        <CgDetailsMore size={20} />
                    </Link>
                </div>
                <div className="hidden group-hover:flex gap-1 absolute bottom-6 m-auto left-1/2 transform -translate-x-1/2">
                    {carImage.map((_, index) => (
                        <div onClick={() => setCurrentImageIndex(index)} className="cursor-pointer">
                            { currentImageIndex === index ? <GoDotFill/> : <GoDot/> }
                        </div>
                    ))}
                </div>
            </div>
            <button
            onClick={handlePreviousButton}
            className="absolute left-[-40px] p-2 bg-[#EAECEE] border border-solid border-[#FDFEFE] rounded-lg z-20 transition-[1s] group-hover:left-0"
            ><FaLongArrowAltLeft/></button>  
            <button
            onClick={handleNextButton}
            className="absolute right-[-40px] p-2 bg-[#EAECEE] border border-solid border-[#FDFEFE] rounded-lg z-20 transition-[1s] group-hover:right-0"
            ><FaLongArrowAltRight/></button>
        </div>
        <div>
            <div className="flex items-center justify-between mt-2">
                <p className="text-xl font-bold text-[#273746]">{carName}</p>
                <p className="text-md font-bold tracking-widest border-b-2 text-[#D0D3D4]">{carModel}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 py-4 border-b border-solid">
                <div className="flex items-center gap-2">
                    <LuUsers2 size={23} className="text-[#27AE60]"/>
                    <p className="text-xs">{carSeater} Seaters</p>
                </div>
                <div className="flex items-center gap-2">
                    <LuFuel size={23} className="text-[#27AE60]"/>
                    <p className="text-xs">{oilType}</p>
                </div>
                <div className="flex items-center gap-2">
                    <RiSpeedUpFill size={23} className="text-[#27AE60]"/>
                    <p className="text-xs">{fuelEfficiency}</p>
                </div>
                <div className="flex items-center gap-2">
                    <TbSteeringWheel size={23} className="text-[#27AE60]"/>
                    <p className="text-xs">{carType}</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                    <p className="text-2xl">${monthlyPayment}</p>
                    <p className="text-xs">/ month</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="rounded-lg p-2 text-[#E74C3C] bg-[#FADBD8]">
                        <MdFavoriteBorder size={16}/>
                    </div>
                    <button className="text-xs font-bold tracking-wider p-2 text-[#FDFEFE] bg-[#27AE60] rounded-lg">Rent Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CantalItem