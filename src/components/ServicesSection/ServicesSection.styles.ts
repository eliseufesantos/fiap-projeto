import styled from 'styled-components';
import bannerImage from '../../assets/imgs/break-image.jpg';

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #000;
`;

export const ParallaxBanner = styled.div`
  background-image: url(${bannerImage});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 450px;

  @media (max-width: 768px) {
    background-attachment: scroll; /* Remove o efeito parallax em telas menores */
    height: 300px;
  }
`;

export const Content = styled.div`
  background: transparent; 
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; 
  z-index: 0;
  background: radial-gradient(
      600px 360px at 5% 50%, 
      rgba(0, 123, 255, 0.4), 
      transparent 70%
    ),
    radial-gradient(
      600px 400px at 85% 78%,
      rgba(0, 123, 255, 0.3),
      transparent 80%
    );

  filter: blur(80px); 
  opacity: 0.8; 
`;

export const Title = styled.h2`
  font-size: 80px; 
  font-weight: 500;
  color: var(--cor-azul-claro);
  margin: 4rem 0 5rem;
  padding-left: 4rem;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 40px; 
    text-align: left;
    margin: 2rem 0 3rem;
    padding-left: 2rem;
  }
`;

export const Accordion = styled.div`
  width: 90%; 
  margin: 0 auto;
  padding: 0 1rem; 
`;

export const AccordionItem = styled.div<{ isActive: boolean }>`
  border-top: 1px solid var(--cor-cinza-claro);
  overflow: hidden;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;

  border-color: ${({ isActive }) => (isActive ? 'var(--cor-vermelho)' : 'var(--cor-cinza-claro)')};
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem 0; 
  transition: background-color 0.3s ease;

  svg {
    width: 42px; 
    height: 42px; 
    flex-shrink: 0; 
  }

  @media (max-width: 768px) {
    svg {
      width: 36px; 
      height: 36px;
    }
  }
`;

export const AccordionTitle = styled.h3`
  font-size: 25px; 
  color: var(--cor-azul-claro);
  font-weight: 500;
  text-transform: uppercase; 
  font-family: 'Gotham Bold', sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AccordionContent = styled.div`
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.5s ease;

  p {
    font-size: 18px; 
    line-height: 1.2;
    color: var(--cor-cinza-claro);
    padding: 1rem 0;
    font-family: 'Gotham Book', sans-serif;

    @media (max-width: 768px) {
      font-size: 16px; 
      text-align: justify;
    }
  }
`;
