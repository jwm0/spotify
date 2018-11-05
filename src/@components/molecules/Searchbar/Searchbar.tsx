import * as React from 'react';

import { Wrapper, StyledInput } from './styles';

class Searchbar extends React.PureComponent<any, any> {
  render() {

    return (
      <Wrapper>
        <span>Search Icon</span>
        <StyledInput />
      </Wrapper>
    )
  }
}

export default Searchbar;
