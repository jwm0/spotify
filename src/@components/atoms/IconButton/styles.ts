import styled from 'styled-components';

export const Wrapper = styled.button<any>`
  margin: 10px;
  width: ${props => props.size ? props.size : 30 }px;
  height: ${props => props.size ? props.size : 30 }px;
  border: none;
  background: none;
  outline: none;
  padding: 0;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;
