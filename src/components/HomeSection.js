import React from 'react'

const HomeSection = () => {
  return (
 <section className='mt-14 pt-12'>
    <div className='container px-4 mx-auto'>
    <h1 className='text-6xl font-black leading-snug'>
        Exchange your <span className='text-[#F8DA5B]'>Pre-owned</span><br/> items for cash
    </h1>
    <p className='pt-8 text-4xl font-normal text-[#247291]'>Never loose value with Suap</p>
    <div className='mt-12'>
        <button className='button rounded-md font-bold text-4xl p-4'>Join now</button>
    </div>
    <div className='mt-28 '>
        <div className='flex justify-center z-50'>
            <div className='p-8 text-4xl rounded-md bg-white mx-40 w-40 text-center'>
                Keep
            </div>
            <div className='p-8 text-4xl rounded-md bg-white mx-40 w-40 text-center'>
                Suap
            </div>
            <div className='p-8 text-4xl rounded-md bg-white mx-40 text-center'>
                Recycle
            </div>
        </div>
    </div>  
    </div>
 </section>
  )
}

export default HomeSection