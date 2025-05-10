import React from 'react'
import { Twitter, Github, Linkedin, Send } from 'lucide-react';





const Contact = () => {
  return (
    <div>
        <section id="contact" className="mt-24 text-center">
        <div className=''>
        <h3 className="  bg-blue-800 dark:bg-blue-600 w-35  mx-auto rounded-md text-white text-centertext-1xl px-1 py-1 mb-2 font-semibold">Contact</h3>
        <div className='mb-5'>
         <h2 className='font-medium text-xl dark:text-white'>"Got Questions or Want to Build a Connection?"</h2>   
        </div>
        
        </div>
        {/* Social media links */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto sm:grid-cols-4 sm:max-w-3xl sm:gap-6 md:gap-10 md:max-w-6xl px-6">
      <a
        href="https://x.com/akhilesh0026"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center  gap-2 px-4 py-2 rounded-lg hover:text-white dark:text-white hover:bg-blue-600 dark:hover:text-black transition shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      >
        <Twitter size={22} />
        Twitter
      </a>

      <a
        href="https://github.com/DevelopAkhilesh"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2  hover:text-white dark:text-white dark:hover:text-black rounded-lg hover:bg-gray-700 transition shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      >
        <Github size={22} />
        GitHub
      </a>

      <a
        href="https://t.me/DevelopAkhilesh"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2 dark:hover:text-black dark:text-white rounded-lg hover:bg-sky-600 hover:text-white transition shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      >
        <Send size={22} />
        Telegram
      </a>

      <a
        href="https://www.linkedin.com/in/akhilesh-guleria-097baa289/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2 dark:text-white dark:hover:text-black hover:text-white rounded-lg hover:bg-blue-800 transition shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      >
        <Linkedin size={22} />
        LinkedIn
      </a>
    </div>
       
      </section>
      
    </div>
  )
}

export default Contact
