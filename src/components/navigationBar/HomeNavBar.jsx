import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa"; // Importing an elegant user icon

export default function HomeNavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
        
        
        <div className="text-xl font-bold text-gray-800 tracking-tight cursor-pointer">
            <a href='/' >Tiberbu <span className="text-blue-600 font-extrabold">Docs</span></a>
        </div>

        {/* Central Search Bar */}
        <div className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-200 px-4 py-2 rounded-full w-full max-w-md mx-4">
            <input 
                type="search" 
                placeholder="Search documentation..." 
                className="w-full bg-transparent text-gray-700 placeholder-gray-500 outline-none pr-2 text-sm" 
            />
            <IoMdSearch className="text-gray-500 text-xl cursor-pointer hover:text-gray-700" />
        </div>  

        {/* Navigation Menu & Actions */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-600">
            <a href="#get-started" className="hover:text-blue-600 transition-colors duration-200">
                Get Started
            </a>
            <a href="#learn" className="hover:text-blue-600 transition-colors duration-200">
                Learn
            </a>
            <a href="#reference" className="hover:text-blue-600 transition-colors duration-200">
                Reference
            </a>
            
            {/* Divider line for visual separation */}
            <span className="h-5 w-[1px] bg-gray-300"></span>

            {/* Log In & Profile Action */}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm font-semibold">
                <FaRegUserCircle className="text-lg" />
                <span>Log In</span>
            </button>
        </div>
    </nav>
  )
}