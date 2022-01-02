import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation, fade } from '../animation';
import styled from 'styled-components';
import  Container from 'react-bootstrap/Container';
import  Form from 'react-bootstrap/Form';
import {FormFeedback} from 'reactstrap';


const Contactus = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [event, setEvent] = useState('');
    const [message, setMessage] = useState('');
    const [touched, setTouched] = useState({
                                    name: false,
                                    email: false,
                                    event: false,
                                    message: false });

    
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleBlur = (field) => {
        setTouched({...touched, field: true})
    }

    const validate = (name, email) => {

        const errors = {
            name: '',
            email: ''
        };

        if (touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be at least 2 characters.';
            } else if (name.length > 15) {
                errors.name = 'Name must be 15 or less characters.';
            }
        }
        if (touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @.';
        }
        return errors;
    }
    const errors = validate(name, email);

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
            <motion.div variants={fade}>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label class="text-secondary mb-2 mt-2">Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" id="name" name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={() => handleBlur('name')}
                               invalid={errors.name}
                            />
                            <FormFeedback>{errors.name}</FormFeedback>
                        </Form.Group>
                        <Form.Group controlId="form.Email">
                            <Form.Label class="text-secondary mb-2 mt-2">Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" id="email" name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => handleBlur("email")}
                                invalid={errors.email}                            
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Form.Group>
                        <Form.Group controlId="form.Event">
                            <Form.Label class="text-secondary mb-2 mt-2">Event</Form.Label>
                            <Form.Control as="select" id="event" name="event"
                                value={event}
                                onChange={(e) => setEvent(e.target.value)}
                            >
                                <option>Wedding</option>
                                <option>Graduation</option>
                                <option>Portrait</option>
                                <option>Family</option>
                                <option>Business</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="form.Textarea">
                            <Form.Label class="text-secondary mb-2 mt-2">Message</Form.Label>
                            <Form.Control as="textarea" rows={3} id="message" name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onBlur={() => handleBlur("message")}
                            />
                        </Form.Group>
                    </Form>
                    <SendBtn type="submit">Send</SendBtn>
                </Container>
            </motion.div>
            </ContactStyle>
            
    )
};

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
const SendBtn = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1.4rem;
`


export default Contactus
