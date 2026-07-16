import React from 'react'
import { IoMdAdd } from "react-icons/io";
import Card from '../../components/articles/Card';
import Search from '../../components/articles/Search';

export default function Articles() {
  return (
    <div className='w-full'>
     <nav className='flex justify-between '>
        <div>
          <h1 className='text-3xl font-bold py-2'>Articles</h1>
          <p className='text-gray-600'>
            lorem ipsum testing 12345699
          </p>
        </div>
        <div>
          <a href='/portal/editor' className='bg-amber-800 flex justify-center items-center gap-2 text-sm hover:bg-amber-800/90 hover text-white p-4 font-bold rounded-lg'><IoMdAdd /> Create article</a>
        </div>
       
     </nav>
     <Search />
     <div className='grid grid-cols-4 gap-8'>
        <Card/>
        <Card/>
        <Card/><Card/><Card/><Card/><Card/><Card/>
     </div>
    
    </div>
  )
}
