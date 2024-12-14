import React from 'react';
import sliderPic_1 from '../../../assets/images/banner/1.jpg'
import sliderPic_2 from '../../../assets/images/banner/2.jpg'
import sliderPic_3 from '../../../assets/images/banner/3.jpg'
import sliderPic_4 from '../../../assets/images/banner/4.jpg'
import sliderPic_5 from '../../../assets/images/banner/5.jpg'
import sliderPic_6 from '../../../assets/images/banner/6.jpg'

const Bannar = () => {
    return (
        <div id='banner'>
            <div className="carousel w-full h-[600px] rounded-xl">

                <div id="slide1" className="carousel-item w-full relative ">
                    <img src={sliderPic_1} className="w-full" />

                    <div className='absolute w-full flex flex-col justify-center p-24 h-[600px] bg-gradient-to-r from-[#151515] rgba(21, 21, 21, 0.00)'>
                        <div className='space-y-7 absolute w-1/3 text-white'>
                            <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] text-lg text-white">Discover More</button>
                                <button className="btn btn-outline border-2 border-white text-white text-lg ml-5">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-5 right-5">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item w-full relative ">
                    <img src={sliderPic_2} className="w-full" />

                    <div className='absolute w-full flex flex-col justify-center p-24 h-[600px] bg-gradient-to-r from-[#151515] rgba(21, 21, 21, 0.00)'>
                        <div className='space-y-7 absolute w-1/3 text-white'>
                            <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] text-lg text-white">Discover More</button>
                                <button className="btn btn-outline border-2 border-white text-white text-lg ml-5">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-5 right-5">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item w-full relative ">
                    <img src={sliderPic_3} className="w-full" />

                    <div className='absolute w-full flex flex-col justify-center p-24 h-[600px] bg-gradient-to-r from-[#151515] rgba(21, 21, 21, 0.00)'>
                        <div className='space-y-7 absolute w-1/3 text-white'>
                            <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] text-lg text-white">Discover More</button>
                                <button className="btn btn-outline border-2 border-white text-white text-lg ml-5">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-5 right-5">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item w-full relative ">
                    <img src={sliderPic_4} className="w-full" />

                    <div className='absolute w-full flex flex-col justify-center p-24 h-[600px] bg-gradient-to-r from-[#151515] rgba(21, 21, 21, 0.00)'>
                        <div className='space-y-7 absolute w-1/3 text-white'>
                            <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] text-lg text-white">Discover More</button>
                                <button className="btn btn-outline border-2 border-white text-white text-lg ml-5">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-5 right-5">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                    </div>
                </div>

                <div id="slide5" className="carousel-item w-full relative ">
                    <img src={sliderPic_5} className="w-full" />

                    <div className='absolute w-full flex flex-col justify-center p-24 h-[600px] bg-gradient-to-r from-[#151515] rgba(21, 21, 21, 0.00)'>
                        <div className='space-y-7 absolute w-1/3 text-white'>
                            <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] text-lg text-white">Discover More</button>
                                <button className="btn btn-outline border-2 border-white text-white text-lg ml-5">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-5 right-5">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                    </div>
                </div>

                <div id="slide6" className="carousel-item w-full relative ">
                    <img src={sliderPic_6} className="w-full" />

                    <div className='absolute w-full flex flex-col justify-center p-24 h-[600px] bg-gradient-to-r from-[#151515] rgba(21, 21, 21, 0.00)'>
                        <div className='space-y-7 absolute w-1/3 text-white'>
                            <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] text-lg text-white">Discover More</button>
                                <button className="btn btn-outline border-2 border-white text-white text-lg ml-5">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-5 right-5">
                        <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;