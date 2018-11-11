import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #282828;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledInput = styled.input`
  background-color: #282828;
  color: #fff;
  caret-color: #1db954;
  width: 100%;
  padding: 20px 10px;
  outline: none;
  border: none;
  font-size: 22px;

  &:focus {
    /* TODO: Add styles */
  }

  &::placeholder {
    color: #1db954;
    opacity: 1;
  }
`;
