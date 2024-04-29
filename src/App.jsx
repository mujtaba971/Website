import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programms from './components/Programms/Programms'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
// import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      
        <Navbar />
        <Hero />
        <div className='container1'>
          <Title subTitle="Our Programm" title="What We Offer" />
        <Programms />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        {/* <Title subTitle="Testimonials" title="What Students Says" /> */}
        {/* <Testimonials /> */}
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App