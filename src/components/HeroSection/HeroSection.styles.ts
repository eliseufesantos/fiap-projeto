import styled from 'styled-components';
import CursorOpen from '../../assets/svg/cursor-open.svg';

export const Container = styled.section`
  width: 100%;
  min-height: 120vh;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  padding: 80px 70px;
  position: relative;
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex; 
  justify-content: space-between; 
  align-items: flex-start;
  gap: 110px; 
  margin-bottom: 40px;
  padding: 0 20px; 
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightColumn = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column; 
  gap: 20px; 
`;

export const Title = styled.h1`
  font-size: 62px;
  font-family: var(--fonte-primaria);
  font-weight: 500;
  margin-bottom: 70px;
  align-self: flex-start;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.0;
  margin-bottom: 15px;
  color: var(--cor-cinza);
  width: 100%;
  text-align: justify;
`;

export const HighlightedText = styled.span`
  color: var(--cor-vermelho); 
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
  margin-left: 20px;

  &::before {
    content: '-';
    color: var(--cor-vermelho);
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const ListItemSubject = styled.li`
  font-size: 16px;
  line-height: 1.6;
  margin: 13px 0;

  &::before {
    content: '/';
    color: var(--cor-vermelho);
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const ImageWrapper = styled.div`
  cursor: url(${CursorOpen}), pointer;
  text-align: left; 
  margin-top: 10px;
  margin-bottom: 10px;

  img {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

export const ImageLabel = styled.span`
  font-size: 12px;
  margin-top: 8px;
  display: block;
  color: var(--cor-cinza);
  text-align: left;
`;

export const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  img {
    width: 40px;
  height: 40px;
  border: 1px solid var(--cor-vermelho);
  border-radius: 50%;
  padding: 8px;
  object-fit: contain;
  }
`;

