import React from 'react';
import styled from 'styled-components';

const Faq = () => {
    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, alias.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, alias.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, alias.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, alias.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="faq-line"></div>
            </div>
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
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    width: 100% auto;
}
span{
    display: block;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`;

export default Faq;
