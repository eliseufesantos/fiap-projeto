// src/components/ContactSection/ContactSection.styles.ts
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 60vh;
  background-color: #000; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: var(--cor-azul-claro);
  margin: 60px 0px;
  font-family: var(--fonte-primaria);
  text-align: center;
  font-weight: 500;
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
`;
