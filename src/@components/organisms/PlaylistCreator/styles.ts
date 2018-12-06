import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FullWidth = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  outline: none;
`;

export const FormWrapper = styled.div`
  display: flex;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 200px;
  outline: none;
`;

export const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: 11px 44px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.6;
  transition: all 33ms cubic-bezier(.3,0,.7,1);
  color: #fff;
  margin-top: 16px;
  text-align: center;
  touch-action: manipulation;
  border: none;
  border-radius: 50px;
  min-width: 130px;
  white-space: normal;
  will-change: transform;
  vertical-align: middle;
  user-select: none;

  &:hover {
    background-color: ${props => lighten(0.1, props.theme.colors.primary)};
    transform: scale(1.02);
  }
`;