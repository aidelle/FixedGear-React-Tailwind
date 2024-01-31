import React from 'react'
import fixie from '../assets/fixie.png'

const Timeline = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={fixie} alt="/"/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#7EC8E3] font-bold'>Fixed Gear</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>What is a Fixed Gear Bike?</h1>
                <p className=''>A fixed-gear bicycle is a bicycle that has a drivetrain with no freewheel 
                    mechanism such that the pedals always will spin together with the rear wheel.
                     The freewheel was developed early in the history of bicycle design 
                     but the fixed-gear bicycle remained the standard track racing design.
                     </p>
                     <button className='bg-[#050A30] text-[#7EC8E3] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Learn More</button>
            </div>
        </div>

    </div>
  )
}

export default Timeline