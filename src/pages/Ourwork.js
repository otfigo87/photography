import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import wedding from '../images/wedding.jpg';
import family from '../images/family.jpg';
import event from '../images/events.jpg';
import portrait from '../images/portrait.jpg';
import business from '../images/business9.jpg';


const Ourwork = () => {
    return (
        <WorkList>
            <p>Our lives are full of love and adventure. Whether thats planning for your wedding, capturing memories of your family, or capturing your personality to promote you, your photos should be a celebration of who you are.
            <br/>Take a look around our site and feel free to snoop around our Instagram feed. It’ll give you a good idea of who we are and what makes us tick. Looking forward to crossing paths and hearing your story!
                {' '}   <a className="btn btn-social-icon btn-adn" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
            </p><br/>
            <Work>
                <Link className="link" to="/ourwork/weddings"><h2>Weddings</h2></Link>
                <p>WEDDING PHOTOGRAPHY AND FILMS THAT CAPTURE YOUR STORY THE WAY YOU LIVED IT.</p>
                <div className="line"></div>
                <Link to="/ourwork/weddings">
                <img src={wedding} alt="wedding"/>
                </Link>
            </Work>
            <Work>
               <Link className="link" to="/ourwork/events"> <h2>Events</h2></Link>
                <p>AVAILABLE TO PHOTOGRAPH A SINGLE EVENT OR SEVERAL EVENTS AT THE SAME TIME WHETHER IT IS A GRADUATION OR ANY OTHER TYPE OF EVENTS INDOOR OR OUT.</p>
                <div className="line"></div>
                <Link to="/ourwork/events">
                <img src={event} alt="events"/>
                </Link>
            </Work>
            <Work>
                <Link className="link" to="/ourwork/family"><h2>Family</h2></Link>
                <p>YOU WILL HAVE THESE BEAUTIFUL MEMORIES FOR GENERATIONS TO COME</p>
                <div className="line"></div>
                <Link to="/ourwork/family">
                <img src={family} alt="family"/>
                </Link>
            </Work>
            <Work>
                <Link className="link" to="/ourwork/portrait"><h2>Portraits</h2></Link>
                <p>WE ARE FANTASTIC WITH EMOTION AND NOSTALGIA IN OUR WORK. EACH PHOTOGRAPH SHOULD BRING A SENSE OF FEELING PROVOKED ON A DEEPER LEVEL.</p>
                <div className="line"></div>
                <Link to="/ourwork/portrait">
                <img src={portrait} alt="portrait"/>
                </Link>
            </Work>
            <Work>
                 <Link className="link" to="/ourwork/commercial"><h2>Commercial</h2></Link>
                <p>THE PHOTOGRAPGER THAT BUILDS YOUR BRAND.</p>
                <div className="line"></div>
                <Link to="/ourwork/commercial">
                <img src={business} alt="commercial"/>
                </Link>
            </Work>
            <button>Contact Us</button>
        </WorkList>
    )
}

const WorkList = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 5rem;
  button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20%;
  }
  h2{
      padding: 0rem 0rem;
      font-family: 'Estonia', cursive;
      margin-bottom: 0;
      color: #f5d291;
      text-decoration: underline;
  }
  p{
      font-family: 'Estonia', cursive;
      font-size: 2.5rem;
      font-weight: 800;
      padding: 0;
      margin-bottom: 2rem;
  }
`;
const Work = styled.div`
  padding-bottom: 3rem;
  img{
      width: 100%;
      height: 70vh;
      
  }
  .line{
      height: 0.2rem;
      background: #cccccc;
      margin-bottom: 3rem;
  }
  
`;

export default Ourwork
