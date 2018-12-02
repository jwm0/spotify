import styled from 'styled-components';

const ImageTile = styled.div<any>`
  background-color: #fff;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  position: relative;
  width: ${props => props.size ? props.size : 200}px;
  height: ${props => props.size ? props.size : 200}px;
  border-radius: ${props => props.isRound && '50%'};
`;

export default ImageTile;
