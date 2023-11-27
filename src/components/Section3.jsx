import React from 'react'
import camp from '../assets/camp.svg'

const Section3 = () => {
    return (
        <>
            <div className='grid md:grid-cols-2'>
                <div className='p-10'>
                    <img src={camp} alt="" />
                    <p className='text-[18px] mt-[-10] text-green-600 font-semibold'>WE ARE HERE FOR YOU</p>
                    <h1 className=' text-black text-6xl font-bold'>Guide You to Easy Path</h1>
                </div>
                <div className='p-10'>
                    <p>
                        Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
                    </p>
                </div>
            </div>
        </>
    )
}

export default Section3
