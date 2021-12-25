import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { OurWorkState } from '../OurWorkState';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const OurWorkDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [ourWork, setOurWork] = useState(OurWorkState);
    const [work, setWork] = useState({});

    useEffect(() => {
        const currentWork = ourWork.filter(stateWork => stateWork.url === url );
        setWork(currentWork[0]);
    }, [url, ourWork]);

    return (
        <>
            {work && (
            <DetailPage variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                 <div>
                    <h2>{work.title}</h2> 
                    <p>{work.text1}</p>
                 </div>
                 <ImagesContainer>
                        <img src={work.image1} alt="work1"/>
                        <img src={work.image2} alt="work2"/>
                        <img src={work.image3} alt="work3"/>
                        <img src={work.image4} alt="work4"/>
                        <img src={work.image5} alt="work5"/>
                        <img src={work.image6} alt="work6"/>
                        <img src={work.image7} alt="work8"/>
                        <img src={work.image8} alt="work7"/>
                        <img src={work.image9} alt="work9"/>
               </ImagesContainer>
            </DetailPage>
            )}   
        </>
    )
};

const DetailPage = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem; 
  h2 {
    font-family: 'Estonia', cursive;
    font-size: 5rem;
  }
  p{
      padding: 0rem 0rem 2rem 0rem;
      font-family: 'Estonia', cursive;
      font-size: 2.5rem;
      
  
  }
`;
const ImagesContainer = styled.div`
   display: grid;
   grid-template-columns: 30% 30% 30%;
   grid-gap: 0.5rem;
  img{ 
    width: 100%;
    height: 100%;
    border-radius: 2%;
    cursor: pointer;
  }
`;

export default OurWorkDetails;

