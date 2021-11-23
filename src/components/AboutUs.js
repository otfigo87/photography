import React from 'react';
import home from '../images/home.jpg';
import styled from 'styled-components';

const Aboutus = () => {
    return (
        <About>
            <Description>
                <div>
                    <Hide>
                        <h2>Telling your story</h2>
                    </Hide>
                    <Hide>
                        <h2>through <span>Beautiful</span></h2>
                    </Hide>
                    <Hide>
                        <h2>& <span>Meaningful</span></h2>
                    </Hide>
                    <Hide>
                        <h2>imagery.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography events that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>    
            </Description>
            <Image>
                    <img src={home} alt="guy with a camera"/>
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
