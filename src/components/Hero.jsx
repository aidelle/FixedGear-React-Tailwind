import React from 'react';
import {ReactTyped} from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#7EC8E3] font-bold p-2'>BE REASONABLY DANGEROUS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Unlock Simplicity. Ride Fixed</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:4xl text-xl font-bold py-4'>ONE</p>

                <ReactTyped className='md:text-5xl sm:4xl text-xl font-bold  md:pl-4 pl-2'
               strings={['GEAR', 'SPEED', 'JOURNEY']} 
                typeSpeed={120} 
                backSpeed={140} 
                
                loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Life's not a spectator sport. Get in the saddle, lock in, and ride. Fixed gear, where every revolution counts.</p>
        <button className='bg-[#7EC8E3] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#050A30]'>Get Started</button>
      
        </div>

    </div>
  )
}

export default Hero