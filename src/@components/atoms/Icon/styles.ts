import styled from 'styled-components';

export const Wrapper = styled.img<any>`
  margin: ${props => props.noGutter ? 0 : 10}px;
  width: ${props => props.size ? props.size : 30 }px;
  height: ${props => props.size ? props.size : 30 }px;
`;
