import React from 'react';
import { LuUserPlus2, LuUserCheck2 } from 'react-icons/lu';
import { IoCarSportOutline } from 'react-icons/io5';
import { SlNote } from 'react-icons/sl';

const steps = [
    {
        stepIcon: <LuUserPlus2/>,
        stepTitle: "Create a profile",
        stepDesc: "Register on our platform to access a personalized car rental experience."
    },
    {
        stepIcon: <IoCarSportOutline/>,
        stepTitle: "Tell us what car you want",
        stepDesc: "Specify your preferred car model, rental period, and pick-up location."
    },
    {
        stepIcon: <LuUserCheck2/>,
        stepTitle: "Match with seller",
        stepDesc: "Our algorithm will match you with the best available car rental options."
    },
    {
        stepIcon: <SlNote/>,
        stepTitle: "Make a deal",
        stepDesc: "Finalize the rental agreement with the car owner and enjoy your hassle-free ride."
    },
]

export const GetStarted = () => {
  return (
    <div className="mt-32 m-auto px-4 sm:max-w-[640px] md:lg:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]">
        <h1 className='text-3xl text-[#2C3E50] font-extrabold'>Get started with 4 simple steps</h1>
        <div className="w-full grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8">
            {steps.map((step) => {
                return <div className="w-full h-[200px] bg-[#EAECEE] border border-solid border-[#FDFEFE] p-4 rounded-xl shadow-lg">
                    <p className=" w-[40px] h-[40px] text-[20px] text-[#27AE60] bg-[#EAECEE] rounded-lg flex items-center justify-center">{step.stepIcon}</p>
                    <h1 className="text-[15px] text-[#2C3E50] font-bold mt-2">{step.stepTitle}</h1>
                    <p className="text-[13px] mt-4">{step.stepDesc}</p>
                </div>
            })}
        </div>
    </div>
  )
}
