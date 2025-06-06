import React from 'react'

const Services = () => {
  return (
    <div>
     <section id="projects" className="mt-24 w-full">
        <div className=' bg-blue-800 dark:bg-blue-600 w-35  mx-auto rounded-md text-white text-center'>
        <h3 className="text-1xl px-1 py-1 mb-2 font-semibold ">Services</h3>
        </div>
        <div className='text-center font-medium text-xl mb-5'>
          <h2 className='font-medium text-black text-xl dark: text-white'>"I Offer a Range of Services to Help You Build, Scale, and Optimize Your Digital Presence."</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          
          <div className=" dark:bg-blue-900 p-5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.4)]">
            <h4 className="text-xl font-semibold mb-2 dark:text-white">Development Services</h4>
            <div className='dark:text-white pl-2 flex flex-col gap-2'>
                <h4>Custom Website Development. </h4>
                <h4>Responsive Web Design.</h4>
                <h4>Full Stack Development.</h4>
                
            </div>
          </div>
          <div className="dark:bg-blue-900 p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.4)]">
            <h4 className=" dark:text-white text-xl font-semibold mb-2"> Business Solutions</h4>
            <div className='dark:text-white pl-2 flex flex-col gap-2'>
                <h4>E-commerce Development.</h4>
                <h4>Personal Branding Sites.</h4>
                <h4>Campaigns or Startups.</h4>
                
            </div>
          </div>
          <div className="dark:bg-blue-900 p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.4)]">
            <h4 className="text-xl font-semibold mb-2 dark:text-white">Professional Services</h4>
            <div className='dark:text-white pl-2 flex flex-col gap-2'>
                <h4>Website Maintenance & Updates.</h4>
                <h4>Bug Fixing & Code Refactoring.</h4>
                <h4>Deployment & Hosting. </h4>
        
            </div>
          </div>
          
        </div>
      </section>

      
    </div>
  )
}

export default Services
