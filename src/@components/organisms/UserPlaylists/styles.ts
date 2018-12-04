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

export const ModalClose = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: grid;
`;
