import React from 'react';
import Bannar from './Bannar/Bannar';
import About from './About/About';
import Services from './Services/Services';
import Products from './Products/Products';
import Contact from './Contact/Contact';
import Team from './Team/Team';

const HomePage = () => {
    return (
        <div>
            <Bannar />
            <About/>
            <Services/>
            <Contact/>
            <Products/>
            <Team/>

            

        </div>
    );
};

export default HomePage;