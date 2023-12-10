import React from 'react';
import Raptor from '../assets/raptor.jpg'

export const Hero = () => {
  return (
    <div className="max-w-[1200px] m-auto h-[100vh] px-4 flex items-center justify-between">
        <div>
            <h1 className="text-[50px] font-bold leading-[4rem]">THE EASY WAY TO <br/> TAKEOVER A LEASE</h1>
            <p className="mt-[1rem] text-[14px]">Live in Philippines, Rent a car now!</p>
            <div className="absolute flex gap-4 px-4 py-2 bg-[#FDFEFE] shadow-xl rounded-2xl  mt-[2rem]">
                <input
                type="text" name="inp1"
                placeholder="What car are you looking for?"
                className="w-[220px] pr-[1rem] text-[13px] outline-none border-r-2 border-[#EAECEE]"/>
                <input
                type="text" name="inp2"
                placeholder="Add an amount in ₱"
                className="w-[200px] pr-[1rem] text-[13px] outline-none border-r-2 border-[#EAECEE]"/>
                <input
                type="text" name="inp3"
                placeholder="Add a minimal make year"
                className="w-[200px] text-[13px] outline-none"/>
                <button className="text-[13px] text-[--header-btn-text] bg-[--header-btn-bg] py-2 px-4 rounded transition-[.3s] hover:bg-[--header-item-hover]">Search</button>
            </div>
        </div>
        <div>
            <img src={Raptor} alt="" className="rounded-2xl"/>
        </div>
    </div>
  )
}
