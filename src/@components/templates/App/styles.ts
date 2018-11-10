import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Background = styled.div`
  background-image: linear-gradient(rgb(30, 32, 100), rgb(4, 6, 12) 85%);
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  position: fixed;
  will-change: transform;
  opacity: 1;
  transition: opacity .25s;
`;
