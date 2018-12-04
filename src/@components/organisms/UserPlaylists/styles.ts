import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const ModalHeader = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  font-size: 35px;
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: grid;
`;
