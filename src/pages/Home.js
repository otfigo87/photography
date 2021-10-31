import React from 'react';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Faq from '../components/Faq';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div>
            <Nav/>
            <AboutUs />
            <Services />
            <Faq />
        </div>
    )
}

export default Home;
