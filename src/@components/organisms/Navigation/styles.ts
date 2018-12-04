import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  background-color: ${props => props.theme.colors.black};
  position: fixed;
  left: 0;
  height: 100vh;
  z-index: 100;
  width: ${props => props.theme.sizes.navigation}px;
  padding-bottom: ${props => props.theme.sizes.playbar}px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 5px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const NewPlaylistButton = styled.button`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 20px;
  background: none;
  padding: 5px 0;
  color: #fff;
  transition: all 300ms linear;
  margin: 20px 0;

  &:hover {
    border-color: ${props => props.theme.colors.secondary};
  }
`;

export const LoginButton = styled.button`
  width: 150px;
  text-align: center;
  line-height: 1;
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 20px;
  padding: 10px;
  color: #fff;
  transition: all 300ms linear;
  margin: 20px 0;

  &:hover {
  }
`;
