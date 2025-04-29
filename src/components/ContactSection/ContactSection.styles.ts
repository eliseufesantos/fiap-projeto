import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px 100px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 80px;
  color: var(--cor-azul-claro);
  margin: 60px 0px;
  font-family: var(--fonte-primaria);
  text-align: center;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 40px;
    margin: 40px 0px;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: var(--cor-vermelho);
  font-size: 30px;
  font-weight: bold;
  padding: 20px 36px;
  border: 1px solid var(--cor-vermelho);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--fonte-primaria);

  &:hover {
    background: var(--cor-vermelho);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 18px 32px;
  }
`;
