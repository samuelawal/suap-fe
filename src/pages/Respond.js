import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Respond = () => {
    const [randomObject, setRandomObject] = useState(null);
    useEffect(() => {
    const respondsData = [{
        intro: 'You are a',
        name: 'Responder',
        text: 'You’re interested in sustainability and are still learning about it. You like the extra income you will receive from selling Pre-owned items. '
    },
        {
            intro: 'You are an',
            name: 'Eco-Boosters',
            text: 'You give a lot of importance to sustainability in your life choices. You also seek out eco-friendly products and services. You are an amazing addition to the Suap community.'        
    }, 
        {
            intro: 'You are an',
            name: 'Eco-Warrior',
            text: 'You already sell your pre-owned items to your community. You are eco-conscious also. You would be a great ambassador for Suap'  ,
    }
]
const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * respondsData.length);
    const selectedObject = respondsData[randomIndex];
    console.log(selectedObject)
    setRandomObject(selectedObject);
  };

  getRandomItem();
},[])
  return (
    <div>
        {/* <Navbar/> */}
        <section className='container px-8 mx-auto'>
            <div className='mx-auto md:w-[600px] w-full'>
            <div>  <img src='./responder.png' alt='responder' className='mx-auto' /></div>
            <h2 className='font-black text-center mt-4 md:text-5xl text-3xl'>
            {randomObject && (
              <span>
                {randomObject.intro}{' '}
                <span className='text-[#ffdd55]'>{randomObject.name}</span>
              </span>
            )}{' '}
            <span>
              <img src='./thumbs.png' className='inline' alt='thumbs' />
            </span>
          </h2>
          {randomObject && <p className='mt-5 text-center'>{randomObject.text}</p>}
        </div>
        </section>
    </div>
  )
}

export default Respond