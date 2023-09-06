import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import Join from './pages/Join';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Respond from './pages/Respond';
import Sustainability from './pages/Sustainability';
import MobileSidebar from './components/MobileSidebar';
import Navbar from './components/Navbar';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout/>,
      children: [
    {
      path: '/join-us',
      element: <Join/>
    },
    {
      path: '/sustainability',
      element: <Sustainability/>
      },
    {
    path: '/respond',
    element: <Respond/>
    }]
    },
    {
      path: '/',
      element: <Home/>
    },
    ])

  return (
    <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;
