import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Card() {
  // Example status: 'published', 'pending', 'private', or 'public'
  const status = 'published'; 

  // Helper to style the status tag dynamically
  const getStatusTag = (status) => {
    const baseStyle = "absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm";
    switch (status) {
      case 'published':
        return <span className={`${baseStyle} bg-emerald-100 text-emerald-800`}>Published</span>;
      case 'pending':
        return <span className={`${baseStyle} bg-amber-100 text-amber-800`}>Pending Review</span>;
      case 'private':
        return <span className={`${baseStyle} bg-slate-200 text-slate-700`}>Private</span>;
      default:
        return <span className={`${baseStyle} bg-blue-100 text-blue-800`}>Public</span>;
    }
  };

  return (
    <div className='w-full max-w-sm overflow-hidden rounded shadow-sm transition-all duration-200 hover:shadow-md'>
        <div className='relative overflow-hidden'>
            <img 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4M7r8l5GcnfM5nMx4SnyPuvZvYbdQVA82tUl5VbHlJu93T7XihX3lFs&s=10' 
              alt='sample' 
              className=''
            />
            {getStatusTag(status)}
        </div>

        <div className='my-3 flex items-center justify-between mx-4'>
            <h1 className='text-lg font-bold text-slate-800'>Get started with Hims</h1>
        </div>

        <div className='flex flex-col p-4 gap-3'>            
            <p className='text-sm leading-relaxed text-slate-600'>
                Explains to the user how to access and log in to the system. How to reset the password and any other auth related.
            </p>
            <a 
              href="#read-more" 
              className='group flex items-center gap-2 self-start text-sm font-semibold text-amber-600 transition-colors duration-200 hover:text-amber-700'
            >
              Read more 
              <FaLongArrowAltRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
        </div>
    </div>
  )
}