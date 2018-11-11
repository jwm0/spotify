import * as React from 'react';

import Tile from '@components/molecules/Tile';

import { Props } from './types';
import { Wrapper, Description, Primary, Secondary } from './styles';

class InfoTile extends React.PureComponent<Props> {
  render() {
    const { primary, secondary, thumbnail, isRound } = this.props;

    return (
      <Wrapper>
        <Tile
          size={70}
          background={thumbnail}
          isRound={isRound}
        />
        <Description>
          <Primary>{primary}</Primary>
          <Secondary>{secondary}</Secondary>
        </Description>
      </Wrapper>
    )
  }
}

export default InfoTile;