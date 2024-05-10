import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero bg-base-200 my-20 py-10">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className='relative lg:w-1/2'>
                        <img src={person} className='w-3/4 rounded-lg' alt="" />
                        <img src={parts} className='w-1/2 absolute border-8 border-white rounded-lg right-5 top-1/2' alt="" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 px-10'>
                        <h1 className="text-xl text-orange-600 font-bold">About us</h1>
                        <h3 className="text-5xl font-bold">We are qualified & of experience in this field</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn text-lg bg-[#ff3811] text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;