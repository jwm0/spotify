import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary.gray};
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  height: ${props => props.theme.sizes.playbar}px;
  bottom: 0;
  z-index: 101;
`;

export const Player = styled.div`
  position: fixed;
  top: -60px;
  height: calc(100vh - 50px);
  width: 100%;
  display: none;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Primary = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
`;

export const Secondary = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;
