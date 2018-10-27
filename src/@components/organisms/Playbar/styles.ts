import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary.gray};
  position: fixed;
  width: 100%;
  height: ${props => props.theme.sizes.playbar}px;
  bottom: 0;
  z-index: 101;
`;
