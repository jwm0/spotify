import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin: 20px 0;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
