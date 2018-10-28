import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Box = styled.div<any>`
  background-color: #fff;
  background-image: ${props => props.background};
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
