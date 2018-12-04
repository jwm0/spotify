import styled from 'styled-components';

export const Wrapper = styled.li<any>`
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  display: grid;
  grid-template-columns: 40px auto 40px 40px 50px;
  grid-gap: 10px;
  padding: 15px 0;
  align-items: center;
`;

export const Details = styled.div`

`;

export const Primary = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 600;
`;

export const Secondary = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

export const DurationText = styled.div`

`;
