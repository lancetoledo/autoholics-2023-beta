import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

const Home = () => {
    return (
        <div className='Home'>
            <Header />
            <Hero />
            <About />
            <Services />
            <Discover />
            <Footer />
        </div>
    )
}

export default Home