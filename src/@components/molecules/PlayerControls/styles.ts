import styled from 'styled-components';

export const railStyle = {
  backgroundColor: '#404040',
};

export const trackStyle = [{
  backgroundColor: '#ddd',
}];

export const StyledHandle = styled.div.attrs({
  style: (props) => ({
    left: `${props.offset}%`,
  }),
})<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  margin-left: -7px;
  margin-top: -5px;
  width: 14px;
  height: 14px;
  opacity: 0;
  transition: opacity 100ms ease-out;

  &:hover,
  &:active {
    opacity: 1;
  }
`;

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
