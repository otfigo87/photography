import React from 'react';
import clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
import home2 from '../images/home2.png';
import styled from 'styled-components';

const Services = () => {
    return (
        <StyledServices>
            <Description>
                <h2>High <span>Quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Book with as little as two hours notice.</p>
                    </Card>
                        <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Edited photos delivered within 48 hours.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Seamless, Ultra-high resolution images.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Fixed prices from just $89..</p>
                    </Card>
                    </Cards>
                </Description>
                <Image>
                    <img src={home2} alt="camera" />
                </Image>
            </StyledServices>
    )
};

const StyledServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  h2{
      padding-bottom: 5rem;
  };
  p{
      width: 100%;
      padding: 2rem 2rem 5rem 0rem;
      text-align: center;
  }
`;
const Description = styled.div`
  flex: 1;
  padding-right: 4rem;
  h2 {
      font-weight: lighter;
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
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 15rem;
  .icon {
      display: flex;
      align-items: center;
      h3{
          margin-left: 1rem;
          background: white;
          color: black;
          padding: 1rem;

      }
  }
`;

export default Services
