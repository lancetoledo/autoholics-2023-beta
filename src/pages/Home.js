import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Discover from '../components/Discover'
import Footer from '../components/Footer'

const Home = () => {

    const [click, setClick] = useState('')


    return (
        <div className='Home'>
            <Header click={click} setClick={setClick} />
            <Hero click={click} setClick={setClick} />
            <About click={click} setClick={setClick} />
            <Services click={click} setClick={setClick} />
            <Discover click={click} setClick={setClick} />
            <Footer click={click} setClick={setClick} />
        </div>
    )
}

export default Home