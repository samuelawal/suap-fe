import React from 'react'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'

const Home = () => {
  return (
    <>
    <section className='banner bg-cover'>
            <div className='bg-[#bcc2c6] h-[1200px] opacity-[0.85] z-10'>
                <Navbar/>
                <HomeSection className="z-50"/>
            </div>
    </section>
    <section className='mt-[-90px]'>
    <div class="partial-circle blue-partial"></div>
    <section className='section blue mb-[60px]'>
    <h3 className='text-4xl text-center text-white p-5'>Why you should Suap it </h3>
        <div className='mx-auto px-4 container pt-8 text-white '>
              <div className='flex justify-between mt-4' >
                <div>
                <div className='flex items-center px-12'>
                  <img src='./home.png' alt='home'/>
                  <div className='ml-5'>
                    <h3 className='text-3xl'>Buy and sell with neighbours</h3>
                    <div className='mt-4'>
                      <p>Suap brings you closer to your local community, making buying, selling & yard sale a personal experience. Discover hidden gems right in your neighborhood.</p>
                    </div>
                  </div>
                  
                </div>
                <div className='flex items-center mt-24 px-12'>
                  <img src='./camera.png' alt='home'/>
                  <div className='ml-5'>
                    <h3 className='text-3xl'>Video-driven experience</h3>
                    <div className='mt-4'>
                      <p>See items in action through engaging videos and stories, creating a more immersive shopping experience. With Suap you can sell Items with GRWM videos.</p>
                    </div>
                  </div>
            
                </div>
                </div>
                <div>
                <div className='flex items-center px-12'>
                  <img src='./market.png' alt='home'/>
                  <div className='ml-5'>
                    <h3 className='text-3xl'>Embrace Sustainable Commerce</h3>
                    <div className='mt-4'>
                      <p>With our unique 'Buyer Request' feature, you have the power to shape your shopping experience. Seek out specific items you're looking for, and let your neighbors know what you need. </p>
                    </div>
                  </div>              
                </div>
                <div className='flex items-center mt-24 px-12'>
                  <img src='./commerce.png' alt='home'/>
                  <div className='ml-5'>
                    <h3 className='text-3xl'>Buyer-Centric Marketplace</h3>
                    <div className='mt-4'>
                      <p>With our unique 'Buyer Request' feature, you have the power to shape your shopping experience. Seek out specific items you're looking for, and let your neighbors know what you need.</p>
                    </div>
                  </div>
                  
                </div>
                </div>
              </div>
        </div>
    </section>
      </section>
      <section className='mb-start mb-[80px]'>
    <div class="partial-circle white-partial"></div>
    <section className='section '>
    <h3 className='font-bold text-center text-5xl'>How Suap works for buyer</h3>
        <div className='container mx-auto px-4 mt-8'>
          <div className='grid grid-cols-4 gap-8 place-items-center'>
            <div>
              <div className='p-3 bg-[#FFDD55] rounded-md mx-auto'><img src='./search.png' alt='search' className="mx-auto"/></div>
                <p className='text-center mt-3 font-bold text-[#ffdd55]'>Find Item/Post <br/>request</p>
            </div>
            <div>
            <div className='p-5 bg-[#FFDD55] rounded-md mx-auto'><img src='./money.png' alt='search'  className="mx-auto" /></div>
                <p className='text-center mt-3 font-bold text-[#ffdd55]'>Pay Seller</p>
            </div>
            <div>
              <div className='p-3 bg-[#FFDD55] rounded-md mx-auto'><img src='./truck.png' alt='search' className="mx-auto"/></div>
                <p className='text-center mt-3 font-bold text-[#ffdd55]'>Receive Item</p>
            </div>
            <div>
              <div className='p-3 bg-[#FFDD55] rounded-md mx-auto'><img src='./escrow.png' alt='search' className="mx-auto"/></div>
                <p className='text-center mt-3 font-bold text-[#ffdd55]'>Receive Escrow</p>
            </div>
          </div>
        </div>
        <h3 className='font-bold text-center mt-32 text-5xl'>How Suap works for Sellers</h3>
        <div className='container mx-auto px-4 mt-8'>
          <div className='grid grid-cols-4 gap-8 place-items-center'>
          <div>
              <div className='p-3 bg-[#FFDD55] rounded-md mx-auto'><img src='./cam.png' alt='search' className="mx-auto"/></div>
                <p className='text-center mt-3 fold-bold text-[#ffdd55]'>Post a video of <br/> the item.</p>
            </div>
            <div>
              <div className='p-4 bg-[#FFDD55] rounded-md mx-auto'><img src='./money.png' alt='search' className="mx-auto"/></div>
                <p className='text-center mt-3 font-bold text-[#ffdd55]'>Sell to buyer.</p>
            </div>
            <div>
              <div className='p-3  bg-[#FFDD55] rounded-md mx-auto'><img src='./escrow.png' alt='search' className='mx-auto'/></div>
                <p className='text-center mt-3 font-bold text-[#ffdd55]'>Confirm payment <br/> in escrow.</p>
            </div>
            <div>
              <div className='p-3 bg-[#FFDD55] rounded-md mx-auto'><img src='./escrow.png' alt='search' className="mx-auto"/></div>
                <p className='text-center mt-3 font-bold text-[#ffdd55]'>Deliver & receive <br/> payment.</p>
            </div>
          </div>
        </div>
    </section>
      </section>
      <section className='mb-start'>
    <div class="partial-circle yellow-partial"></div>
    <section className='section yellow mb-[60px]'>
        <div className='container mx-auto px-4 mt-12 mb-24 text-center'>
    <h3 className='font-bold text-center text-5xl'>Join the suap community</h3>
          <button className='bg-white rounded-md mx-auto mt-12 p-4 font-bold mb-12 text-3xl'>Join now</button>
        </div>
    </section>
      </section>
      <section className='mb-start mb-[80px]'>
    <div class="partial-circle white-partial"></div>
    <section className='section '>
        <div className='container mx-auto px-8 mt-8'>
          <div className='flex justify-between'>
            <div>
              <p className='font-bold text-2xl mb-8'>Suap</p>
                <p className="mb-4">United Kingdom</p>
                <p className="mb-4">info@suapped.com</p>
            </div>
            <div>
            <p className="mb-5 font-bold">About us</p>
                <p className="mb-5 font-bold">Terms and Conditions</p>
                <p className="mb-5 font-bold">Privacy policy</p>
                <p className="mb-5 font-bold">FAQ</p>
            </div>
            <div>
            <p className="mb-5 font-bold text-2xl">Newsletter</p>
                <input type='email' className='w-full border border-black p-2 rounded-md mb-4' placeholder='Your Email'/>
                <p className="mb-5 font-bold text-center text-sm">Follow us</p>
                <div className='flex justify-between'>
                <img src='./facebook.png'  className='mx-3'alt='facebook'/>
                <img src='./instagram.png' className='mx-3' alt='facebook'/>
                <img src='./twitter.png' className='mx-3' alt='facebook'/>
                <img src='./linkedin.png' className='mx-3' alt='facebook'/>
                </div>
            </div>
          </div>
        </div>
    </section>
      </section>
    </>

  )
}

export default Home