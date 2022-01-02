import React from 'react';
import clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
import home2 from '../images/home2.jpg';
import styled from 'styled-components';

const Services = () => {
    return (
        <>
        <Title>High <span>Quality</span> services</Title>
        <StyledServices>
            <Image>
                    <img src={home2} alt="camera" />
            </Image>
            <Description>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                           <p>Book with as little as two hours notice.</p>
                        </div>
                        
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                            <p>Edited photos delivered within 48 hours.</p>
                        </div>
                        
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                            <p>Seamless, Ultra-high resolution images.</p>
                        </div>
                        
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                            <p>Fixed prices from just $89.</p>
                        </div>
                        
                    </Card>
                    </Cards>
                </Description>
            </StyledServices>
        </>    
    )
};

const StyledServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  @media (max-width: 700px){
        display: block;
        img {
            margin-top: 3rem;
        }
    }
  h3{
          background: white;
          color: black;
          padding: 0.5rem;

      }
`;
const Image = styled.div`
  overflow: hidden;
  flex: 1;
  img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
 }
`;
const Description = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  margin-left: 1rem;
  .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  }
`;
const Title = styled.h2`
  padding: 2rem 5rem;
`;

export default Services;
