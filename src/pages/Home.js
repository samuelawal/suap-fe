import React from 'react'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'

const Home = () => {
  return (
    <section className='banner bg-cover'>
            <div className='bg-[#bcc2c6] h-screen opacity-70 z-10'>
                <Navbar/>
                <HomeSection className="z-50"/>
            </div>
    </section>
    // <div className='relative'>
    //     <img src='./banner.png' alt='banner'  className='absolute w-full'/>
    //     <div className="bg-[#BCC2C6] absolute w-full opacity-70">
    //         <p>Hello</p>
    //     </div>
    // </div>
  )
}

export default Home