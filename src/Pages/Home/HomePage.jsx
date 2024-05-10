import React from 'react';
import Bannar from './Bannar/Bannar';
import About from './About/About';
import Services from './Services/Services';
import Products from './Products/Products';

const HomePage = () => {
    return (
        <div>
            <Bannar />
            <About/>
            <Services/>
            <Products/>

            

        </div>
    );
};

export default HomePage;