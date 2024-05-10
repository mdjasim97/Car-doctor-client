import React from 'react';
import timetablePic from '../../../assets/icons/timetable.png'
import contactPic from '../../../assets/icons/phone.png'
import locationPic from '../../../assets/icons/location.png'

const Contact = () => {
    return (
        <div className='my-28'>
            <div className='bg-[#202020] flex text-white p-14 rounded-lg my-10'>
                <div className='flex items-center w-1/3'>
                    <div className='p-4'>
                        <img src={timetablePic} alt="" />
                    </div>
                    <div className='p-4'>
                        <p>We are open monday-friday</p>
                        <h1 className='text-2xl'>7:00 am - 9:00 pm</h1>
                    </div>

                </div>


                <div className='flex items-center w-1/3'>
                    <div className='p-4'>
                        <img src={contactPic} alt="" />
                    </div>
                    <div className='p-4'>
                        <p>Have a question?</p>
                        <h1 className='text-2xl'>+2546 251 2658</h1>
                    </div>

                </div>

                <div className='flex items-center w-1/3'>
                    <div className='p-4'>
                        <img src={locationPic} alt="" />
                    </div>
                    <div className='p-4'>
                        <p>Need a repair? our address</p>
                        <h1 className='text-2xl'>Liza Street, New York</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;