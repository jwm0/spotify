import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.span<any>`
  width: 60px;
  word-break: normal;
  text-align: ${props => props.left ? 'start' : 'end'};
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Controls = styled.div`

`;
