import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 100ms linear;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  &:hover {
    opacity: 0.9;
  }
`;

export const Caption = styled.span`
  margin-top: 8px;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
