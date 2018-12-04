import styled from 'styled-components';

export const  Wrapper = styled.div<any>`
  background-color: ${props => props.theme.colors.gray};
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  position: relative;
  width: ${props => props.size ? props.size : 200}px;
  height: ${props => props.size ? props.size : 200}px;
  border-radius: ${props => props.isRound && '50%'};
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
