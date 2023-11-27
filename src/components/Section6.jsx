import React from 'react'
import pattern from '../assets/pattern.png'
import phon from '../assets/phones.webp'
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa6";



const Sectionsix = () => {
    return (
        <>
            <div className='md:h-[85vh] grid md:grid-cols-2 md:overflow-hidden w-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${pattern})` }}>

                <div className='md:ml-8'>
                    <h1 className='text-white text-4xl md:text-6xl md:px-20 md:mt-36 font-bold'>Get for free now!</h1>
                    <p className='text-white px-20 mt-10'>Available on iOS and Android</p>
                    <div className='items-center md:flex gap-2 md:ml-16 md:mt-10'>
                        <button className='bg-white font-bold text-[17px] flex justify-center items-center gap-3 text-green-600 rounded-full px-20 py-4'><IoLogoApple className='h-5 w-5' />App Store</button>
                        <button className=' font-bold text-[17px] flex justify-center items-center gap-3 text-white border rounded-full px-20 py-4'><FaGooglePlay />Play Store</button>
                    </div>
                </div>
                <div>
                    <img src={phon} alt="" className='md:relative md:bottom-36' />
                </div>

            </div>

        </>
    )
}

export default Sectionsix
