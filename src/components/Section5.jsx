import React from 'react'
import camp from '../assets/camp.svg'
import mob from '../assets/phone.webp'
import feature from '../assets/feature-bg.png'
import { TbBrandAppgallery } from "react-icons/tb";


const Section5 = () => {
    return (
        <>
            <div className='p-5 md:flex md:justify-center md:items-center'>
                <div>
                    <img src={camp} className='h-14 w-14' alt="" />
                    <p className='text-5xl font-bold md:text-6xl md:font-bold text-black mt-[-12px]'>Our Features</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 bg-no' style={{ backgroundImage: `url(${feature})` }}>

                <div className='hidden md:block'>
                    <img src={mob} className='rotate-12' alt="" />
                </div>
                <div className='p-5 md:p-12'>
                    <div className='h-20 w-20 flex justify-center items-center bg-green-600 rounded-full'>
                        <TbBrandAppgallery className='h-8 w-8 text-white' />
                    </div>
                    <h1 className='text-4xl font-bold mb-8 mt-4'>
                        Real Maps Can Be Offline
                    </h1>
                    <p className='text-[17px] text-gray-600'>
                        We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location
                    </p>
                    <div className='mt-10 h-20 w-20 flex justify-center items-center bg-green-600 rounded-full'>
                        <TbBrandAppgallery className='h-8 w-8 text-white' />
                    </div>
                    <h1 className='text-4xl font-bold mb-8 mt-4'>
                        Technology Using Augment Reality
                    </h1>
                    <p className='text-[17px] text-gray-600'>
                        Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection
                    </p>
                </div>

                <div className='p-5 md:p-12'>
                    <div className='h-20 w-20 flex justify-center items-center bg-green-600 rounded-full'>
                        <TbBrandAppgallery className='h-8 w-8 text-white' />
                    </div>
                    <h1 className='text-4xl font-bold mb-8 mt-4'>
                        Set An Adventure Schedule
                    </h1>
                    <p className='text-[17px] text-gray-600'>
                        Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion
                    </p>
                    <div className='mt-10 h-20 w-20 flex justify-center items-center bg-green-600 rounded-full'>
                        <TbBrandAppgallery className='h-8 w-8 text-white' />
                    </div>
                    <h1 className='text-4xl font-bold mb-8 mt-4'>
                        Many New Locations Every Month                    </h1>
                    <p className='text-[17px] text-gray-600'>
                        Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing
                    </p>
                </div>
            </div>
        </>
    )
}

export default Section5
