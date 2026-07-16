import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TextInputs from './components/input/TextInputs'
import HomePage from './pages/HomePage'
import ArticlesLayout from './layout/ArticlesLayout'
import LogIn from './pages/auth/LogIn'
import PortalLayout from './layout/PortalLayout'
import Articles from './pages/portal/Articles'
import Editor from './components/articles/Editor'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={<HomePage />} />
        <Route path='/article' element={<ArticlesLayout />} />
        <Route path='/login' element ={<LogIn />} />
        <Route path='/portal' element={<PortalLayout />}>
          <Route path='articles' element={<Articles />} />
          <Route path='editor' element={<Editor />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
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
