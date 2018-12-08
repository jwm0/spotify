import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  font-size: 20px;
  text-decoration: none;
  border-bottom: 5px solid;

  &:hover {
    color: ${props => lighten(0.1, props.theme.colors.secondary)};
    border-color: ${props => lighten(0.1, props.theme.colors.secondary)};
  }
`;
