import * as React from 'react';

import Tile from '@components/molecules/Tile';

import { Wrapper } from './styles';
import { Props } from './types';

class TileGrid extends React.Component<Props> {
  static defaultProps = {
    tiles: [],
  }

  render() {
    const { tiles } = this.props;

    return (
      <Wrapper>
        {tiles.map((tile, i) => (
          <Tile
            key={i}
            name={tile.name}
            background={tile.background}
          />
        ))}
      </Wrapper>
    )
  }
}

export default TileGrid;
