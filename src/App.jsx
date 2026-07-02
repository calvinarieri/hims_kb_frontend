import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TextInputs from './components/input/TextInputs'
import HomePage from './pages/HomePage'
import ArticlesLayout from './layout/ArticlesLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={<HomePage />} />
        <Route path='/article' element={<ArticlesLayout />} />
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
