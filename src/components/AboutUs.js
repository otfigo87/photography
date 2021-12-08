import React from 'react';
import home from '../images/home.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';

const Aboutus = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Telling your story</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>through <span>Beautiful</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>& <span>Meaningful</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>imagery.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography events that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>    
            </Description>
            <Image>
                    <motion.img variants={photoAnimation } src={home} alt="guy with a camera"/>
            </Image>
            
        </About>
    )
}

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 4rem;
  h2 {
      font-weight: lighter;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Image = styled.div`
  overflow: hidden;
  flex:1;
  img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default Aboutus
