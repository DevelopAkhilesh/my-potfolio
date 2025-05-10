import React, { useEffect, useState } from 'react'
import{Sun,Moon} from 'lucide-react'

const ThemeToggle = () => {
    const [theme,setTheme]=useState("light");

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme')

        if(savedTheme){
            setTheme(savedTheme)
        }else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
        }},[])
    useEffect(()=>{
        if (theme==='dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme]);
    
    const toggleTheme =()=>{
        setTheme(theme==='light'?'dark':'light')
    }
    
  return (
    <div>
      <button onClick={toggleTheme}
      className='p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 hover:text-blue-600'
      >
        {theme==='dark'?(<Sun className='h-4 w-4'/>):(<Moon className='h-4 w-4'/>)}

      </button>
    </div>
  )
}

export default ThemeToggle
