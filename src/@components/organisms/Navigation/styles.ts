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
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
`;
