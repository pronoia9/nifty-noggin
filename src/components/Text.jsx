import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styled, { keyframes } from 'styled-components';

const Text = ({ prevAdvice, advice }) => {
  const quoteRef = useRef(), idRef = useRef();

  useEffect(() => {
    new Typed(idRef.current, {
      strings: [`${prevAdvice?.id ?? ''}`, `${advice.id}`],
      typeSpeed: 50,
      showCursor: false,
      backSpeed: 25,
      // smartBackspace: true,
    });
    new Typed(quoteRef.current, {
      strings: [`${prevAdvice?.advice ?? ''}`, `${advice.advice}`],
      typeSpeed: 15,
      showCursor: false,
      backSpeed: 7.5,
      // smartBackspace: true,
    });
    // return () => { typedQuote.destroy(); typedId.destroy(); };
  }, [advice, prevAdvice]);

  return (
    <Container>
      <Wrapper>
        <Id>
          Advice #<span ref={idRef} />
        </Id>
        <Quote ref={quoteRef} />
      </Wrapper>
      <Divider />
    </Container>
  );
};

export default Text;

const Container = styled.div`
  width: 540px;
  background-color: #323a49;
  border-radius: 0.5rem;
  padding: 48px 48px 72px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    width: 343px; /* clamp(295px, 90%, 34rem); */
    max-width: 91.5%;
    margin-bottom: 2rem;
    padding: 40px 24px 64px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Id = styled.p`
  color: #53ffaa;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 4.08571px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 3.45714px;
  }
`;

const Quote = styled.p`
  color: #cee3e9;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.3px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.257143px;
  }
`;

const Divider = styled.img`
  content: url('/images/pattern-divider-desktop.svg');
  width: 100%;

  @media (max-width: 768px) {
    content: url('/images/pattern-divider-mobile.svg');
  }
`;
