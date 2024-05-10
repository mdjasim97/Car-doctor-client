import React from 'react';
import teamPic1 from '../../../assets/images/team/1.jpg'
import teamPic2 from '../../../assets/images/team/2.jpg'
import teamPic3 from '../../../assets/images/team/3.jpg'
import facebook from '../../../assets/icons/facebook.png'
import tweeter from '../../../assets/icons/tweeter.png'
import linkedin from '../../../assets/icons/linkedin.png'
import instagram from '../../../assets/icons/instagram.png'

const Team = () => {
    return (
        <div className='my-28'>
            <div className='text-center w-full flex flex-col items-center space-y-6'>
                <p className='text-lg font-bold text-orange-600 '>Team</p>
                <h1 className='text-5xl font-bold '>Meet Our Team</h1>
                <p className='w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={teamPic1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center">Car Engine Plug</h2>
                            <p className='text-xl'>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <img src={facebook} alt="" />
                                <img src={tweeter} alt="" />
                                <img src={linkedin} alt="" />
                                <img src={instagram} className='min-w-10' alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={teamPic2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center">Car Engine Plug</h2>
                            <p className='text-xl'>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <img src={facebook} alt="" />
                                <img src={tweeter} alt="" />
                                <img src={linkedin} alt="" />
                                <img src={instagram} className='min-w-10' alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={teamPic3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center">Car Engine Plug</h2>
                            <p className='text-xl'>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <img src={facebook} alt="" />
                                <img src={tweeter} alt="" />
                                <img src={linkedin} alt="" />
                                <img src={instagram} className='min-w-10' alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Team;