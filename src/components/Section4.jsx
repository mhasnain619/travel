import React from 'react'
import boat from '../assets/boat.webp'
import meter from '../assets/meter.svg'

const Section4 = () => {
    return (
        <div className='h-[32vh] md:h-[72vh] w-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${boat})` }}
        >
            <div className='left-24 bottom-4 h-56 w-72 border relative md:top-28 md:left-16 flex justify-center items-center bg-white rounded-3xl'>
                <div className='flex space-x-3'>
                    <div>
                        <img src={meter} alt="" />
                    </div>
                    <div>
                        <div className='mb-10'>
                            <div className='flex gap-10 text-gray-400  justify-center'>
                                <p className='text-[18px]'>Destination</p>
                                <p className='font-bold text-xl text-green-700'>48 min</p>
                            </div>
                            <p className='text-black font-bold text-[22px]'>Aguas Calientes</p>
                        </div>
                        <div>
                            <div className=' text-gray-400 text-xl'>
                                <p>Start Track</p>
                            </div>
                            <p className='text-black font-bold text-[22px]'>Wonorejo Pasuruan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
