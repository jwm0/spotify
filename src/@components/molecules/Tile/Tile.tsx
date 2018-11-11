import * as React from 'react';

import { Props } from './types';
import { Wrapper, Box, PlayButton, Caption } from './styles';

class Tile extends React.PureComponent<Props> {
  render() {
    const { background, name, size, isRound } = this.props;

    return (
      <Wrapper>
        <Box
          background={background}
          size={size}
          isRound={isRound}
        >
          <PlayButton />
        </Box>
        {name && <Caption>{name}</Caption>}
      </Wrapper>
    )
  }
}

export default Tile;
