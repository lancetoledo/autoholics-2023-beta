import React from 'react'
import Video from '../videos/video2.mp4'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='overlay'></div>
            <video className='video' src={Video} playsInline autoPlay loop muted></video>
        </div>
    )
}

export default Hero