import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [myBooking, setmyBooking] = useState([])


    const url = `http://localhost:4000/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setmyBooking(data))
    }, [])


    const handleDelete = (id) => {

        const proced = confirm("Are you sure! you want to delete")
        if (proced) {

            console.log("Delete Successful ", id)

            fetch(`http://localhost:4000/booking/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myBooking.filter(data => data._id !== id)
                    setmyBooking(remaining)
                })

        }

    }


    const handleStatus = (id) => {
        console.log("Update Successful ", id)

        fetch(`http://localhost:4000/update/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    const remaining = myBooking.filter(booking => booking._id !== id)
                    const updated = myBooking.find(booking => booking._id === id)
                    updated.status = "confirm"
                    const newBooking = [updated, ...remaining]
                    setmyBooking(newBooking)
                }
            })
    }


    // console.log(myBooking)

    return (
        <div>
            <h1>This is a booking page : {myBooking.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {myBooking.map(data => <tr key={data}>
                            <th>
                                <button onClick={() => handleDelete(data._id)} className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask w-24 h-24">
                                            <img src={data.Image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>


                                    <div>
                                        <h1>Service : { } </h1>
                                        <p>Type : Hard</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Customer Name : {data.Name}
                            </td>

                            <td>Date : {data.Date}</td>


                            <td>Price : {data.Price}</td>

                            <th>
                                { data.status === "confirm" ? <span className='font-bold text-green-600'>Confirmed</span>  : <button onClick={() => handleStatus(data._id)} className="btn btn-sm bg-red-600 text-white">Please Confirm</button>}
                            </th>

                        </tr>)}
                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default Bookings;