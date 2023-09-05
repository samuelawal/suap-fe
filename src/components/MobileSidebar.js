import React  from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {FaTimes} from "react-icons/fa"

const MobileSidebar = ({isMobileBarOpen, toggleMobileBar}) => {
const links = [
    {
        path: '/',
        title: 'Blog'
    },
    {
        path: '/sustainability',
        title: 'Sustainability',
    }, 
    {
        path: "https://docs.google.com/forms/d/e/1FAIpQLScKJjMf47FsTZIiDqs_0C5XhzMpQFrHiWBJ1V-FlUP3mz5vHQ/viewform?usp=sf_link",
        title: 'Join'
    }
]
  return (
    <div className='relative'>
      {/* Mobile menu button */}

      {/* Mobile sidebar */}
      {isMobileBarOpen && (
        <div className='fixed inset-0 flex z-40'>
          {/* Overlay */}
          <div className='fixed inset-0 bg-gray-600 opacity-75'></div>

          {/* Sidebar */}
          <motion.div
            animate={{ width: "100%" }}
            transition={{
              ease: "linear",
              x: { duration: '1s' },
            }}
            className='fixed inset-y-0 right-0 flex flex-col bg-white shadow-lg'
          >
            {/* Sidebar content */}
            <div className='flex items-center justify-between h-16 px-6 py-4 bg-gray-200'>
              <span className='text-2xl font-semibold text-[#ffdd55]'>
                Suap
              </span>
              <FaTimes onClick={toggleMobileBar} size="1.5em"/>
            </div>
            <ul className='flex flex-col items-center flex-grow p-4'>
              {/* Sidebar links */}
              {links.map((link) => (
                <li key={link.path} className='text-primary border-b-2'>
                  <NavLink
                    to={link.path}
                    onClick={toggleMobileBar}
                    className='text-primary flex font-black items-center px-4 py-2 mt-2  text-black'
                  >
                    <span>{link.title}</span>
                  </NavLink>
                </li>
              ))}
              {/* Add more sidebar links as needed */}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;