import * as React from 'react';

import { Wrapper, StyledInput } from './styles';

class Searchbar extends React.PureComponent {
  render() {

    return (
      <Wrapper>
        <span>Search Icon</span>
        <StyledInput
          type="text
        "/>
      </Wrapper>
    )
  }
}

export default Searchbar;
