import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About'
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
// Adjust path accordingly

function Home() {
  return (
    <div className=" relative min-h-screen text-gray-900 ">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
