import React from 'react'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'

const Section2 = () => {
    return (
        <>
            <div id='work'>
                <div className="carousel carousel-center  space-x-8 md:rounded-box">
                    <div className="carousel-item">
                        <img src={img1}
                            className="h-96 w-full md:h-full md:w-full " />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="h-96 w-full md:h-full md:w-full rounded-box" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[350px] md:h-[330px] md:w-[700px] p-5 md:p-16 rounded-[30px] bg-green-600 md:relative md:bottom-60 md:left-[270px]'>
                        <h1 className='text-white text-3xl mb-5 md:text-4xl'>Feeling Lost And Not Knowing The Way?</h1>
                        <p className='text-gray-100'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
