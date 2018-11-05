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
  width: 200px;
  height: 200px;
`;

export const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
`;

export const Caption = styled.span`

`;
