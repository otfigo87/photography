import React from 'react';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Faq from '../components/Faq';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Home = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutUs />
            <Services />
            <Faq />
        </motion.div>
    )
}

export default Home;
