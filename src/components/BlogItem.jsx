import React from 'react'
import { MdOutlineDateRange } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';

export const BlogItem = (props) => {
    const { image, title, date, comment } = props.blogData;

  return (
    <div className="w-[500px] bg-[#FDFEFE] rounded-3xl overflow-hidden">
        <img src={image}alt="" />
        <div className="p-4">
            <h1 className="text-md text-[#2C3E50] font-bold">{title}</h1>
            <div className="flex items-center justify-between text-sm text-[#ABB2B9] font-semibold mt-4">
                <span className="flex items-center gap-1">
                    <MdOutlineDateRange/>
                    <p>{date}</p>
                </span>
                <span className="flex items-center gap-1">
                    <FaRegComments/>
                    <p>{comment}</p>
                </span>
            </div>
        </div>
    </div>
  )
}
