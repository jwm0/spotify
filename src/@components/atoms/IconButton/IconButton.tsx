import * as React from 'react';

import { Wrapper, Image } from './styles';
import { Props } from './types';

const IconButton: React.SFC<Props> = (props) => {
  return (
    <Wrapper
      onClick={props.onClick}
      size={props.size}
    >
      <Image src={props.image} />
    </Wrapper>
  );
};

export default IconButton;
