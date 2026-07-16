import React from 'react'
import { Outlet } from 'react-router-dom'
import PortalSideNavbar from '../components/navigationBar/PortalSideNavbar'

export default function PortalLayout() {
  return (
    <div className='flex h-sceen w-screen'>
        <PortalSideNavbar />
        <div className='flex-1 px-8 py-8'>
           <Outlet />
        </div>
    </div>
  )
}
