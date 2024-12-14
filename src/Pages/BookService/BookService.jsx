import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const BookService = () => {


    const { user } = useContext(AuthContext)
    const bookservice = useLoaderData()
    // console.log(bookservice)

    const { _id, title, price, img } = bookservice


    const handleBookService = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value ;
        const images = bookservice.img

        const Order = {
            Image : images,
            Name: name,
            Email: email,
            Date: date,
            Price: price
        }

        console.log(Order)



        fetch(`http://localhost:4000/booking`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(Order)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>

            <div className='text-5xl font-bold text-center'>
                <h1 >Service Book : {title}</h1>
            </div>

            <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Enter your name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Enter your email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} name='price' placeholder="Enter Due amount" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary btn-block">Confirm Book</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;