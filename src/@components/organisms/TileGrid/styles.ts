import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  display: grid;
  grid-template-columns: ${props => `repeat(auto-fit, minmax(${props.size}px, 1fr))`};
  grid-gap: 20px;
`;
