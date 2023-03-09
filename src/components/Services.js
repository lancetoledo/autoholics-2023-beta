import React from 'react'
import vinyl from '../images/vinylwraps.png'
import tint from '../images/windowtint.png'
import coat from '../images/ceramiccoating.png'

const Services = () => {
    return (
        <div className='services'>
            <h1 className='services_title'>Our Services</h1>
            <div className='deals'>
                <div className='option'>
                    <img className='icon' src={vinyl} alt='Vinyl Wraps' />
                    <h2>Vinyl Wraps</h2>
                    <p>Starting From:</p>
                    <h2>$1,900</h2>
                </div>
                <div className='option'>
                    <img className='icon' src={tint} alt='Vinyl Wraps' />
                    <h2>Vinyl Wraps</h2>
                    <p>Starting From:</p>
                    <h2>$1,900</h2>
                </div>
                <div className='option'>
                    <img className='icon' src={coat} alt='Vinyl Wraps' />
                    <h2>Vinyl Wraps</h2>
                    <p>Starting From:</p>
                    <h2>$1,900</h2>
                </div>
            </div>
        </div>
    )
}

export default Services