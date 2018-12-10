import styled from 'styled-components';
import { lighten } from 'polished';

export const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 0 20px;
  max-width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid hsla(0,0%,100%,.1);
`;

export const InfoWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrimaryText = styled.span`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
`;

export const SecondaryText = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-bottom: 15px;
`;

export const Controls = styled.div`
`;

export const PlayButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
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
    background-color: ${props => lighten(0.1, props.theme.colors.secondary)};
    transform: scale(1.02);
  }
`;

export const PublishButton = styled.button`
  background: none;
  padding: 9px 20px;
  margin-left: 15px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.6;
  transition: all 33ms cubic-bezier(.3,0,.7,1);
  color: #fff;
  margin-top: 16px;
  text-align: center;
  touch-action: manipulation;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  min-width: 130px;
  white-space: normal;
  will-change: transform;
  vertical-align: middle;
  user-select: none;

  &:hover {
    border-color: #fff;
    transform: scale(1.02);
  }
`;

export const Image = styled.div<any>`
  background-color: #fff;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: ${props => props.isRound && '50%'};
`;

export const Description = styled.div`
  margin: 10px;
  padding: 10px 10px;
  border-left: ${props => `1px solid ${props.theme.colors.secondary}`};
`;

export const PublicLabel = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 10px;
  letter-spacing: 1px;
`;
