import React from 'react'
import Navbar from '../components/Navbar'

const Join = () => {
  return (
   <>
 
   <section className='container px-4 mx-auto mt-8 pt-8'>
        <form className='p-8 border'>
            <h3 className='font-bold text-3xl mb-2 text-center'>Join us</h3>
            <p className='text-sm text-gray-600 text-center mb-4'>Kindly fill all the necessary details</p>
            <div className='mb-6'>
                <label for="name" className='font-black block text-lg'>Name</label>
                <input type='text' className='border-black border p-2 rounded-md mt-3 w-3/6'/>
            </div>
            <div className='mb-6'>
                <label for="name" className='font-black block text-lg'>Email address</label>
                <input type='email' className='border-black border p-2 rounded-md mt-3 w-3/6'/>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>Gender</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Male</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>Female</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block text-lg mb-5'>What is your age group ?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>13 - 18</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>19 - 25</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>26 - 30</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>31 and above</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-5 text-lg'>On a scale of 1 - 5, How important is sustainability in your daily life choices?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>5: Extremely important, I actively seek sustainable options.</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>4: Very important, I try my best to make eco-conscious choices.</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>3: Moderately important, I consider sustainability but may not always prioritize it.</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>2: Slightly important, sustainability is not my primary concern.</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>1: Not important, sustainability doesn't influence my choices.</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>Do you actively seek out eco-friendly products and services?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Yes</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>No</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>How often do you purchase pre-owned or second-hand items??</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Regularly</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Occasionally</label>
                    </div>

                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>Rarely</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>Never</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>What motivates you to buy pre-owned items?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Cost Savings</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Environmental Impact</label>
                    </div>

                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="female" className='font-medium block'>Unique Finds</label>
                    </div>

                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>Do you currently sell pre-owned items?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Yes</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>No</label>
                    </div>

                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>Are you interested in selling them in the future?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Yes</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>No</label>
                    </div>

                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>What types of items would you be interested in selling on Suap?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Clothes</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Electronics</label>
                    </div>

                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Furniture</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Other</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>How likely are you to engage with video content while shopping online?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Very likely</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Likely</label>
                    </div>

                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Neutral</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Unlikely</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Very Unlikely</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>Would you be interested in creating video content to showcase your products on Suap?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Yes</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>No</label>
                    </div>

                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>How likely are you to engage with story content while shopping online?</p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>Very likely</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Likely</label>
                    </div>

                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Neutral</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Unlikely</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>Very Unlikely</label>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <p for="name" className='font-black block mb-4 text-lg'>On a scale of 1 to 5, how likely are you to consider buying pre-owned items in the future through Suap? </p>
                <div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="male" className='font-medium block'>5: Very likely, I might give it a try.</label>
                    </div>
                   
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>4: Likely, I could consider it under certain circumstances.</label>
                    </div>

                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>3: Neutral, I am unsure about buying pre-owned items.</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>2:  Unlikely, I prefer new products.z</label>
                    </div>
                    <div className='flex mb-5'>
                        <input type='checkbox' className='mr-4'/>
                        <label for="ocssionaly" className='font-medium block'>1:Never</label>
                    </div>
                </div>
            </div>
            <button className='w-full p-3 bg-[#F8DA5B] text-center font-bold rounded mt-4'>Submit</button>
        </form>
   </section>
    </>
  )
}

export default Join