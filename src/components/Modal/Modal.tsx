import styled from 'styled-components';
import CursorClose from '/src/assets/svg/cursor-close.svg';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30,30,30,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: url(${CursorClose}), pointer;
`;

const Content = styled.div`
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;
