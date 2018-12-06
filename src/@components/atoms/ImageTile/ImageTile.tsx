import * as React from 'react';

import Icon from '@components/atoms/Icon';
import music from '@assets/Icons/music.svg';

import { Wrapper, Center } from './styles';

const ImageTile = (props) => (
  <Wrapper {...props}>
    {!props.background &&
      <Center>
        <Icon size={60} image={music} />
      </Center>
    }
    {props.children}
  </Wrapper>
);

export default ImageTile;
