import React from 'react'
import Hero_image from '../assets/hero-image.gif'

const Hero = () => {
  return (
    <div>
       <section className="relative min-h-screen flex flex-col justify-center items-center gap-10 px-6 md:px-12 md:flex-row space-between md:gap-30 ">
        <div className='max-w-2xl md:max-w-4xl'>
         <div className=''>   
        <h2 className="text-4xl md:text-6xl  dark:text-white font-extrabold">Develop With <span className="text-blue-800 dark:text-blue-500">Akhilesh</span></h2>
        <h2 className='text-4xl md:text-6xl dark:text-white font-extrabold mb-4'> Modern Web Experiences.</h2>
        </div>
        <div className=''>
        <p className="text-xl mb-4 text-blue-800 dark:text-blue-500"> I empower businesses to grow and thrive by leveraging my expertise in developing tailored solutions and strategies</p>
        <a href="https://cal.com/developakhilesh/30min" target='_blank' className="bg-blue-800 text-white py-3 px-15 rounded hover:bg-blue-700">
          Lets Talk 
        </a>
        </div>
        </div>
        <div className=' max-w-md md:max-w-2xl '>
         <img  className='  rounded dark:shadow-[0_0_25px_rgba(0,0,255,0.8)] z-50' src={Hero_image} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Hero
