import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

    const [services, setservice] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setservice(data))
    },[])
    return (
        <div>
            <div className='text-center w-full flex flex-col items-center space-y-6'>
                <p className='text-lg font-bold text-orange-600 '>Services</p>
                <h1 className='text-5xl font-bold '>Our Service Area</h1>
                <p className='w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services?.map(card => <ServiceCard 
                    key={card._id}
                    card={card}>
                        
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;