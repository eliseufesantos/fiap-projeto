import styled from 'styled-components';
import HeaderImage from '../../assets/imgs/header.jpg';

export const Container = styled.header`
  width: 100%;
  height: 90vh;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${HeaderImage}) no-repeat right center / cover;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(10, 10, 10, 1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: red;
  transition: width 0.2s ease-out;
`;

export const Logo = styled.img`
  height: 25px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 20px;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 80px 50px;

  @media (max-width: 768px) {
    padding: 60px 20px;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  color: transparent;
  -webkit-text-stroke: 1px var(--cor-vermelho);
  margin-bottom: 10px;
  font-family: var(--fonte-primaria);

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 64px;
  color: var(--cor-azul-claro);
  margin-bottom: 20px;
  font-family: var(--fonte-primaria);

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #fff;
  width: 42%;
  font-weight: 100;
  margin-bottom: 20px;
  font-family: var(--fonte-primaria);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ScrollText = styled.span`
  font-size: 12px;
  color: var(--cor-azul-claro);
  letter-spacing: 2px;
  margin-bottom: 10px;
  font-family: var(--fonte-primaria);
`;

export const ScrollIcon = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid var(--cor-azul-claro);
  border-radius: 50%;
  padding: 8px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

