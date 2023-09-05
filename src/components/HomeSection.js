import React from 'react'
import {Typewriter} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
 <section className='mt-20 pt-1'>
    <div className='container px-8 mx-auto'>
    <h1 className='md:text-6xl text-4xl font-black leading-snug'>
        Exchange your <span className='text-[yellow]'><Typewriter
          loop
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          className="text-red"
          words={['Pre-owned', 'Idle']}
        />
        </span><br/> items for cash
    </h1>
    <p className='pt-12 md:text-4xl text-2xl font-bold text-[#247291]'>Never loose value with Suap</p>
    <div className='mt-24'>
    <Link to="https://docs.google.com/forms/d/e/1FAIpQLScKJjMf47FsTZIiDqs_0C5XhzMpQFrHiWBJ1V-FlUP3mz5vHQ/viewform?usp=sf_link"> <button className='button rounded-md font-bold text-4xl p-4'>Join now</button></Link>
    </div>
    {/* <div className='mt-28 '>
        <div className='grid grid-cols-3 place-items-center gap-8 relative'>
            <div className='p-8 text-4xl rounded-md bg-white  w-60 text-center'>
                Keep
            </div>
            <div className='p-8 text-4xl rounded-md bg-white  w-60 text-center'>
                Suap
            </div>
            <div className='p-8 text-4xl rounded-md bg-white  w-60 text-center'>
                Recycle
            </div>
        </div>
    </div>   */}
    </div>
 </section>
  )
}

export default HomeSection