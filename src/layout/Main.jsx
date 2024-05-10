import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Pages/Home/Shared/Navbar';

const main = () => {
    return (
        <div className='px-36'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default main;