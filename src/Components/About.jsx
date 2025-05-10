import React from 'react'
import Profile from '../assets/profile2.png'


const About = () => {
  return (
    <div>
      <section id="about" className=" mt-20  mx-auto px-6 md:px-12 ">
        <div className='text-center bg-blue-800 dark:bg-blue-600 w-35  mx-auto rounded-md text-white'>
        <h3 className="text-1xl px-1 py-1 mb-8 font-semibold">About Me</h3>
        </div>
        <div className=' shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:bg-blue-900 z-50 flex flex-col md:flex-row md:gap-30 rounded-lg'> 
          <div className=' md:my-25 px-4 py-4 my:auto'>
         <p className="md:text-lg max-w-3xl px-2 sm:max-w-5xl text-left md:text-justify font-medium my-auto dark:text-white">
         I'm a passionate and detail-oriented web developer with a strong foundation in full-stack development. I recently earned my Bachelor’s degree in Computer Science & Engineering from Chitkara University, where I gained my skills in JavaScript, React, Node.js, and Modern Web Technologies. I enjoy building responsive, user-focused applications and have experience working on real-world projects, including AI chatbots, e-commerce platforms, and dynamic portfolios.
        </p> 
           </div>
          <div className='max-w-full rounded  md:max-w-xl md:min-h-60 mx-auto my-auto p-4'>
            <img className='w-auto h-auto ' src={Profile} alt="" />
          </div>
         
        </div>
        
      </section>
    </div>
  )
}


export default About
