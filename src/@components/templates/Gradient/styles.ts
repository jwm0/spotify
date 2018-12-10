import styled from 'styled-components';

export enum GradientColors {
  DARK_BLUE = 'DARK_BLUE',
  DARK = 'DARK',
  DARK_ORANGE = 'DARK_ORANGE',
}

const gradients = {
  [GradientColors.DARK_BLUE]: 'linear-gradient(rgb(30, 32, 100), rgb(4, 6, 12) 85%)',
  [GradientColors.DARK]: 'linear-gradient(rgb(18, 18, 18), rgb(8, 8, 8) 85%)',
  [GradientColors.DARK_ORANGE]: 'linear-gradient(#352511,#0e0a03 85%)',
};

export const Background = styled.div<any>`
  background-image: ${props => props.gradientColor ? gradients[props.gradientColor] : 'none'};
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  position: fixed;
  will-change: transform;
  opacity: 1;
  transition: opacity 250ms;
  z-index: -1;
`;
