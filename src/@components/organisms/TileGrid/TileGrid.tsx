import * as React from 'react';

import Tile from '@components/molecules/Tile';

import { Wrapper } from './styles';
import { Props } from './types';

class TileGrid extends React.Component<Props> {
  static defaultProps = {
    size: 200,
    tiles: [],
  }

  render() {
    const { tiles, type, size, customOnClick } = this.props;

    return (
      <Wrapper size={size}>
        {tiles.map((tile, i) => (
          <Tile
            key={i}
            id={tile.id}
            name={tile.name}
            background={tile.image}
            type={type}
            size={size}
            customOnClick={customOnClick}
          />
        ))}
      </Wrapper>
    )
  }
}

export default TileGrid;
