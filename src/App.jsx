import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TextInputs from './components/input/TextInputs'
import HomePage from './pages/HomePage'
import ArticlesLayout from './layout/ArticlesLayout'
import LogIn from './pages/auth/LogIn'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={<HomePage />} />
        <Route path='/article' element={<ArticlesLayout />} />
        <Route path='/login' element ={<LogIn />} />
    </Route>
  )
)

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />    
    </div>
  )
}
