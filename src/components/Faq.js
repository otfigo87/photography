import React from 'react';
import styled from 'styled-components';
//reusable components
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';

const Faq = () => {
    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="What services do you offer?">
                
                    <div className="answer">
                        <p>We offer photography services for weddings and elopements, individual and couple portraits, engagement sessions, family, newborn, maternity, and more. All sessions are on-location of your choice</p>
                    </div>
               
            </Toggle>
                <Toggle title="How do I reserve you for my date?">
                
                    <div className="answer">
                        <p> All dates are reserved once we receive your signed contract and deposit.</p>
                    </div>
               
            </Toggle>
            <Toggle title="Do you deliver every image you shoot?">
                
                    <div className="answer">
                        <p>No, we do not. We eliminate duplicate images, test shots, missed focused shots, shots with bad expressions and other images that may dilute the overall product delivery. For example, because we shoot with low apertures, sometimes we take a few extra shots to make sure we have the perfect focus.</p>
                    </div>
               
            </Toggle>
            <Toggle title="Which photographer will be shooting my wedding?">
               
                    <div className="answer">
                        <p>Typically, the photographer you meet with will be the photographer for your engagement session and wedding. You may request to meet with a specific photographer; otherwise, we’ll make the decision based on personality, availability, language abilities, and your referral.</p>
                    </div>
                
            </Toggle>
            <Toggle title="How many images do we get in our wedding day album?">
               
                    <div className="answer">
                        <p>Our signature album package contains up to 50 images. If you’d like to add more images, you are welcome to do so for a small fee per additional image.</p>
                    </div>
                
            </Toggle>
            <Toggle title="Do you travel to meet clients?">
               
                    <div className="answer">
                        <p>Due to the limitations of our schedule, we currently do not travel to meet clients. If you would like to schedule a meeting, please contact our studio manager at 944.287.2153 </p>
                    </div>
                
            </Toggle>
            <Toggle title="Do you back up our images? How can we ensure that our images won’t be lost?">
                
                    <div className="answer">
                        <p>We have never lost an image from a wedding due to the following backup workflow for each our events:
During the event, we shoot on two cards at the same time. This instantly creates a backup of every image in the camera.</p>
                    </div>
                
            </Toggle>
            <Toggle title="Do you have liability insurance?">
               
                    <div className="answer">
                        <p>Yes. Many venues require the photographer to have Liability Insurance. So before hiring Uncle Joe, make sure he’s covered.</p>
                    </div>
                
            </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    )
};

const StyledFaq = styled.div`
  min-height: 90vh;
  display: block;
  padding: 5rem 5rem;
  color: white;
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
  h4{
      padding-top: 1.5rem;
  }
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    width: 100% auto;
}
span{
    display: block;
}
.question{
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    cursor: pointer;
    p{
        padding: 1rem 0rem;
    }
}
`;

export default Faq;
