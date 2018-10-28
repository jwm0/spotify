import * as React from 'react';

import { Outer, Inner } from './styles';

const Content: React.SFC = ({ children }) => {
  return (
    <Outer>
      <Inner>
        {children}
      </Inner>
    </Outer>
  )
}

export default Content;
