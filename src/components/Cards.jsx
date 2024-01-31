import React from 'react'
import Aluminum from '../assets/Aluminum.png'
import Carbon from '../assets/Carbon.png'
import Steel from '../assets/Steel.png'
import Titanium from '../assets/Titanium.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px- bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem] bg-white' src={Steel} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Steel Frame</h2>
            <p className='text-center text-4xl font-bold'>$</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'> Wallet-friendly</p>
                <p className='py-2 border-b mx-8'>confident handling</p>
                <p className='py-2 border-b mx-8'>long-lasting investment</p>
            </div>
            <button className='bg-[#7EC8E3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-8rem] bg-white' src={Aluminum} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Aluminum Frame</h2>
            <p className='text-center text-4xl font-bold'>$$</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>  Mid-range contender</p>
                <p className='py-2 border-b mx-8'>Light and nimble</p>
                <p className='py-2 border-b mx-8'> Snappy acceleration</p>
            </div>
            <button className='bg-[#7EC8E3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem] bg-white' src={Carbon} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Carbon Frame</h2>
            <p className='text-center text-4xl font-bold'>$$$</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'> Premium indulgence</p>
                <p className='py-2 border-b mx-8'>Effortless glide</p>
                <p className='py-2 border-b mx-8'>stiff power transfer</p>
            </div>
            <button className='bg-[#7EC8E3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem] bg-transparent' src={Titanium} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Titanium Frame</h2>
            <p className='text-center text-4xl font-bold'>$$$$</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>  Luxury statement</p>
                <p className='py-2 border-b mx-8'> damped vibrations</p>
                <p className='py-2 border-b mx-8'>forever frame</p>
            </div>
            <button className='bg-[#050A30]  text-[#7EC8E3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
        </div>
        </div>

    </div>
  )
}

export default Cards