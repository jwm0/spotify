import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div<any>`
  background-color: #fff;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  position: relative;
  width: ${props => props.size ? props.size : 200}px;
  height: ${props => props.size ? props.size : 200}px;
`;

export const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Caption = styled.span`

`;
