import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggleMobileBar}) => {

  return (
    <nav className='container px-4 pt-10 mx-auto font-bold'>
        <div className='flex justify-between items-center'>
            <div className='p-4'><Link to="/">Suap</Link></div>
            <div className=''>
                <ul className='md:flex hidden p-4 items-center'>
                    <li className='mr-20 font-black'>United kingdom</li>
                    <li className='mx-6 font-black'>Sustainabiity</li>
                    <li className='mx-6 font-black'>Blog</li>
                    <li className='mx-6 font-black'>
                    <Link to="/join-us"><button className='button p-3 rounded-md'>Join</button></Link>
                    </li>
                </ul>
                    <div className="md:hidden flex justify-items-end mr-2">
          <FaBars className="mt-2" size="1.5em" onClick={toggleMobileBar}/>
          </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar