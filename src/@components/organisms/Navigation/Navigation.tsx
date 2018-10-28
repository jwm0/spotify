import * as React from 'react';

import { Wrapper, Menu, StyledLink } from './styles';

class Navigation extends React.Component {
  render() {
    return (
      <Wrapper>
        <Menu>
          <StyledLink to="/search">Search</StyledLink>
          <StyledLink to="/browse">Home</StyledLink>
          <StyledLink to="/library">My Music</StyledLink>
        </Menu>
      </Wrapper>
    );
  }
}

export default Navigation;
