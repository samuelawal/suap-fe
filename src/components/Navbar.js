import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='container px-4 pt-10 mx-auto font-bold'>
        <div className='flex justify-between items-center'>
            <div className='p-4'><Link to="/">Suap</Link></div>
            <div >
                <ul className='flex p-4 items-center'>
                    <li className='mr-20 font-black'>United kingdom</li>
                    <li className='mx-6 font-black'>Sustainabiity</li>
                    <li className='mx-6 font-black'>Blog</li>
                    <li className='mx-6 font-black'>
                        <button className='button p-3 rounded-md'><Link to="/join-us">Join</Link></button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar