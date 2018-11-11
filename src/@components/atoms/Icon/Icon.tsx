import * as React from 'react';

import { Wrapper } from './styles';
import { Props } from './types';

const Icon: React.SFC<Props> = (props) => {
  return (
    <Wrapper
      src={props.image}
      size={props.size}
    />
  );
};

export default Icon;
