import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 16px;

  &:focus {
    /* TODO: Add styles */
  }
`;
