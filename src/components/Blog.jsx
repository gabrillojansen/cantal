import React, { useContext } from 'react';
import { BlogItem } from './BlogItem';
import { CantalContext } from '../context/CantalContext';

export const Blog = () => {
    const { blogData } = useContext(CantalContext);

  return (
    <div className="mt-32 w-full">
        <div className="m-auto px-4 sm:max-w-[640px] md:lg:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]">
          <h1 className="text-3xl text-[#2C3E50] font-extrabold">Our Blog</h1>
        </div>
        <div className="w-full mt-8 flex gap-4">
            {blogData.map((blog) => {
                return <BlogItem blogData={blog}/>
            })}
        </div>
    </div>
  )
}
