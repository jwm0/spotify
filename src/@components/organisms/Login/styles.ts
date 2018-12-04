import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled.button`
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  background-color: ${props => props.color};
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
`;
