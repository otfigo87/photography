import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation, fade } from '../animation';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const Contactus = () => {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title>
                    <motion.h2 style={{color:"#e1ce3f"}} variants={titleAnimation}>Get in touch</motion.h2>  
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation} >
                        <Circle/>
                        <h2>Send Us An Email</h2>
                    </Social>
                </Hide>  
                <Hide>  
                    <Social variants={titleAnimation} >
                        <Circle/>
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation} >
                        <Circle/>
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
            </div>
            <ContactForm>
                <Form.Control size="lg" type="text" placeholder="Name" />
                <br />
                <Form.Control size="lg" type="text" placeholder="Phone Number" />
                <br />
                <Form.Control size="lg" type="text" placeholder="Email" />
                <br />
                <Form.Select size="lg">
                    <option>Select your event</option>
                    <option value="wedding">Wedding</option>
                    <option value="graduation">Graduation</option>
                    <option value="portrait">Portrait</option>
                    <option value="family">Family</option>
                    <option value="commercial">Commercial</option>
                </Form.Select>
                <br />
                <Form.Control size="lg" as="textarea" rows={3} type="text" placeholder="Message" />
            </ContactForm>
             <ContactButton variants={fade}> Send </ContactButton> 
        </ContactStyle>   
    )
}

const ContactButton = styled(motion.button)`
    margin-top: 1rem;
    padding: 0.5rem;
    width: 30%;
    border-radius: 0;
    background-color: #f0d185;
    color: black;
    &:hover{
        background-color: transparent;
        color: white;
    } 
`

const ContactStyle = styled(motion.div)`
    padding: 2rem 5rem;
    color: #353535;
    min-height: 90vh;
`;
const Title = styled.div`
    margin-bottom: 2rem;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: white;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-left: 3rem;
    cursor: pointer;
    h2 {
        margin: 1rem;
        font-size: 1.7rem;
    }
`;
const ContactForm = styled.div`
    margin-top: 3rem;
`

export default Contactus
