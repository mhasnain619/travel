import React from 'react'
import logo from '../assets/hilink-logo.svg'
import twiter from '../assets/twitter.svg'
import wordpress from '../assets/wordpress.svg'
import youtube from '../assets/youtube.svg'
import insta from '../assets/instagram.svg'
import facebok from '../assets/facebook.svg'

const Footer = () => {
    return (
        <>
            <div className='grid mt-20 md:h-[40vh] md:grid-cols-5'>
                <div className='ml-16'>
                    <img src={logo} alt="" />
                </div>
                <div className='leading-10'>
                    <p className='font-bold text-xl'>Learn More</p>
                    <p className='cursor-pointer  text-gray-500'>About Hilink</p>
                    <p className='cursor-pointer  text-gray-500'>Press Releases</p>
                    <p className='cursor-pointer  text-gray-500'>Environment</p>
                    <p className='cursor-pointer  text-gray-500'>Jobs</p>
                    <p className='cursor-pointer  text-gray-500'>Privacy Policy</p>
                    <p className='cursor-pointer  text-gray-500'>Contact Us</p>
                </div>
                <div className='leading-10'>
                    <p className='cursor-pointer font-bold text-xl'>Our Community</p>
                    <p className='cursor-pointer  text-gray-500'>Climbing xixixi</p>
                    <p className='cursor-pointer  text-gray-500'>Hiking hilink</p>
                    <p className='cursor-pointer  text-gray-500'>Hilink kinthill</p>
                </div>
                <div className='leading-10'>
                    <p className='font-bold text-xl'>Contact Us</p>
                    <p className='cursor-pointer  text-gray-500'>Admin Officer:

                        123-456-7890</p>
                    <p className='cursor-pointer  text-gray-500'> Email Officer:

                        hilink@akinthil.com</p>
                </div>
                <div className='leading-10'>
                    <p className='font-bold text-xl'>Social</p>
                    <div className='flex mt-5 gap-5'>
                        <img src={twiter} alt="" />
                        <img src={wordpress} alt="" />
                        <img src={youtube} alt="" />
                        <img src={insta} alt="" />
                        <img src={facebok} alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex justify-center items-center h-20'>
                <p>2023 Hilink | All rights reserved</p>
            </div>

        </>
    )
}

export default Footer
