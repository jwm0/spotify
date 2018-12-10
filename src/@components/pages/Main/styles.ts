import styled from 'styled-components';

export const Header = styled.div`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  font-size: 30px;
  letter-spacing: 1px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin: 20px 0;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 5px;
`;
