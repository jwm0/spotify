import * as React from 'react';

import { Props } from './types';
import { Wrapper, Box, PlayButton, Caption } from './styles';

class Tile extends React.PureComponent<Props> {
  render() {
    const { background, name, size } = this.props;

    return (
      <Wrapper>
        <Box
          background={background}
          size={size}
        >
          <PlayButton />
        </Box>
        {name && <Caption>{name}</Caption>}
      </Wrapper>
    )
  }
}

export default Tile;
