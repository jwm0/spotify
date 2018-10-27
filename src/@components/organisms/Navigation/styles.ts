import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary.black};
  position: fixed;
  left: 0;
  height: 100vh;
  z-index: 100;
  width: ${props => props.theme.sizes.navigation}px;
  padding-bottom: ${props => props.theme.sizes.playbar}px;
`;
