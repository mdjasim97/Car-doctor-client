import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ card }) => {
    const { _id, img, title, price } = card
    // console.log(card)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='h-48 rounded-lg w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p className='text-xl text-orange-600 font-bold'>Price : {price}</p>
                    <div className="card-actions">
                        <Link to={`/book/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;