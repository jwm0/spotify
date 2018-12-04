import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Header = styled.div`

`;

export const LoginButton = styled.button`
  color: #fff;
  border: none;
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  background-color: ${props => props.color};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px;
`;
