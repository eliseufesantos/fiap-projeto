import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 65vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  color: var(--cor-azul-claro);
  margin: 60px 0px;
  font-family: var(--fonte-primaria);
  text-align: center;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 40px 0px;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: var(--cor-vermelho);
  font-size: 14px;
  font-weight: bold;
  padding: 12px 24px;
  border: 1px solid var(--cor-vermelho);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--fonte-primaria);

  &:hover {
    background: var(--cor-vermelho);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 20px;
  }
`;
