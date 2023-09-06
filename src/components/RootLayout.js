import React, {useState} from 'react'
import MobileSidebar from './MobileSidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const RootLayout = () => {
    const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);
const toggleMobileBar = () => {
  setIsMobileBarOpen(!isMobileBarOpen)
}
  return (
    <>
    <Navbar toggleMobileBar={toggleMobileBar}/>
    <MobileSidebar isMobileBarOpen={isMobileBarOpen} toggleMobileBar={toggleMobileBar}/>
    <Outlet/>
    </>
  )
}

export default RootLayout