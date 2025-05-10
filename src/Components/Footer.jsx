import { Twitter, Github, Linkedin, Send } from 'lucide-react';
import finallogo from '../assets/final logo.png'

const Footer = () => {
  return (
    <footer className=" dark:text-white py-10 mt-16 border-t-2 border-gray-500 px-0">
      <div  className= "  flex flex-col px-6 gap-6 md:flex-row md:items-center md:mx-15  md:gap-40 ">

        {/* Left: Brand or Name */}
     <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>   
        
        <div className=''>
          <div className='flex flex-row items-center gap-2'>
          <img src={finallogo} alt="" className='h-10 w-10 mb-2' />
          <h2  className="text-xl font-semibold mb-2">Develop Akhilesh</h2>
          </div>
          
          
          <p className="text-sm dark:text-white">
            Web Developer | MERN Stack | Open to opportunities
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col md:ml-5 ">
          <h3 className="text-lg font-medium  ">Company</h3>
          <div className="flex flex-col font-light md:grid-cols-4 gap-1 pl-2">
          <a href="#home" className="dark:text-white hover:text-blue-600">Home</a>
          <a href="#projects" className="dark:text-white hover:text-blue-600">About</a>
          <a href="#about" className="dark:text-white hover:text-blue-600">Services</a>
          <a href="#contact" className="dark:text-white hover:text-blue-600">Contact</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-medium  ">Services</h3>
           <div className="flex flex-col font-light md:grid-cols-4 gap-1 pl-2"> 
          <a  className="dark:text-white hover:text-blue-600">Development </a>
          <a className="dark:text-white hover:text-blue-600">Business </a>
          <a  className="dark:text-white hover:text-blue-600">Professional </a>
          </div>
        </div>
    

        {/* Right: Social Links */}
        <div className='flex flex-col'>
          <h3 className="text-lg font-medium ">Contact</h3>
          <div className="flex flex-col font-light md:grid-cols-4 gap-1 pl-2">
          <a href="#home" className="dark:text-white hover:text-blue-600">Twitter</a>
          <a href="#projects" className="dark:text-white hover:text-blue-600">Github</a>
          <a href="#about" className="dark:text-white hover:text-blue-600">Telegram</a>
          <a href="#contact" className="dark:text-white hover:text-blue-600">linkedIn</a>
            
          </div>
        </div>
      </div>
    </div>
      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Akhilesh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
