import styled from 'styled-components';

export const Outer = styled.div`
  width: 100%;
  padding-left: ${props => props.theme.sizes.navigation}px;
  padding-bottom: ${props => props.theme.sizes.playbar}px;
`;

export const Inner = styled.div`
  padding: 20px;
`;
