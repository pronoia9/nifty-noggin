import styled, { keyframes } from 'styled-components';

const Text = ({ advice }) => {
  return (
    <Container>
      <Wrapper>
        <Id>
          Advice #<span key={`id-${advice.id}`}>{advice.id}</span>
        </Id>
        <Quote key={`quote-${advice.id}`}>{advice.advice}</Quote>
      </Wrapper>
      <Divider />
      {/* <Text advice={advice} /> */}
    </Container>
  );
};

export default Text;

const idAnimation = keyframes`
/* ----------------------------------------------
 * Generated by Animista on 2023-5-12 20:6:29
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
`;

const quoteAnimation = keyframes`
/* ----------------------------------------------
 * Generated by Animista on 2023-5-12 20:6:29
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

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

  span {
    animation: ${idAnimation} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.55s both;
  }
`;

const Quote = styled.p`
  color: #cee3e9;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.3px;
  animation: ${quoteAnimation} 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.25s both;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.257143px;
  }
`;

const Divider = styled.img`
  content: url('/pattern-divider-desktop.svg');
  width: 100%;

  @media (max-width: 768px) {
    content: url('/pattern-divider-mobile.svg');
  }
`;
