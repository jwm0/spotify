import styled from 'styled-components';

const center = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  padding-top: 0;
  border-radius: 20px;
  min-width: 320px;
`;

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const ModalDialog = styled.div<any>`
  ${props => !props.fullscreen && center};
  background-color: ${props => props.theme.colors.gray};
  max-width: 100%;
  overflow-y: hidden;
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
`;

export const ModalClose = styled.div`
  padding: 0;
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateY(-50%);
`;

export const ModalBody = styled.div`
`;

export const ModalFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 0 20px 20px;
`;
