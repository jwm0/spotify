import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary.gray};
  position: fixed;
  width: 100%;
  height: ${props => props.theme.sizes.playbar}px;
  bottom: 0;
  z-index: 101;
`;

export const Player = styled.div`
  position: fixed;
  top: -60px;
  height: calc(100vh - 50px);
  width: 100%;
  /* display: none; */
`;
