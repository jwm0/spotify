import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${props => props.theme.colors.grey};
  position: relative;
  width: 300px;
  height: 200px;
  border: 2px dashed grey;
`;

export const UploadWrapper = styled.div`
  display: flex;
  padding: 3rem 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonCross = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  background-color: #fff;
  opacity: 0;
  transition: all 200ms ease;
  padding: 0;
`;

export const ButtonReplace = styled.label<any>`
  display: ${props => props.disabled ? 'none' : 'block'};
  border: 2px solid blue;
  border-radius: 2rem;
  color: blue;
  cursor: pointer;
  padding: 5px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  opacity: 0;
`;

export const CenterText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img<any>`
  opacity: ${props => props.loading ? '0.3' : '1'};
  max-width:100%;
  max-height:100%;
  transition: all 200ms ease;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;

  &:hover {
    ${ButtonCross} {
      opacity: 1;
    }
    ${ButtonReplace} {
      opacity: 1;
    }
    ${Image} {
      opacity: 0.3;
    }
  }
`;

export const FileButton = styled.label<any>`
  align-self: center;
  padding: 5px 10px;
  border: 2px solid ${props => props.disabled ? 'grey' : 'blue'};
  border-radius: 2rem;
  color: ${props => props.disabled ? 'grey' : 'blue'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all 200ms ease;
  user-select: none;

  &:hover {
    ${props => !props.disabled && `
        background-color: blue;
        color: white;
    `}
  }
`;

export const FileInput = styled.input`
  /* hide from user */
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const ErrorMessage = styled.span`
  color: red;
`;
