import React from 'react'
import camp from '../assets/camp.svg'
import star from '../assets/star.svg'
import Play from '../assets/play.svg'
import pattern from '../assets/pattern-bg.png'

const Section1 = () => {
    return (
        <>
            <div className='p-5 md:p-20 grid md:grid-cols-2 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${pattern})` }} id='home' >
                <div>
                    <img src={camp} alt="" />
                    <h1 className='text-6xl mt-[-16px] md:text-8xl font-bold font-sans md:mt-[-22px] mb-10'>Putuk Truno Camp Area</h1>
                    <p className='md:text-[17px] mb-10'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
                    <div className='md:flex items-center gap-5 mb-10'>
                        <div className='flex gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div className='flex gap-1 '>
                            <span className='font-bold text-xl'>198k</span>
                            <p className='text-[20px] text-gray-700'>Excellent Reviews</p>
                        </div>
                    </div>
                    <div className='md:flex md:gap-5'>
                        <button className='bg-green-600 px-28 py-4 md:px-8 md:py-5 rounded-full font-bold text-white'>Download App</button>
                        <div className='flex justify-center items-center gap-2 cursor-pointer'>
                            <img src={Play} className='h-7 w-7' alt="" />
                            <p className='font-bold'>How we work?</p>
                        </div>
                    </div>
                </div >
                <div className="">
                    <div className='border p-4 h-52 w-72 bg-slate-950 rounded-3xl mt-10 md:ml-16'>
                        <div>
                            <div className='mb-16'>
                                <div className='flex gap-36 text-gray-400 text-xl justify-center'>
                                    <p>Location</p>
                                    <p>x</p>
                                </div>
                                <p className='text-white font-bold text-xl ml-3'>Aguas Calientes</p>
                            </div>
                            <div className='flex justify-center gap-10'>
                                <div>
                                    <p className='text-gray-400 text-xl'>Distance</p>
                                    <p className='text-white font-bold text-xl'>173.28 mi</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-xl'>Elevation</p>
                                    <p className='text-white font-bold text-xl'>2.040 km</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Section1
