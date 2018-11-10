import * as React from 'react';

import Tile from '@components/molecules/Tile';

import { Props } from './types';
import { Wrapper, Description, Primary, Secondary } from './styles';

class InfoTile extends React.PureComponent<Props> {
  render() {
    const { primary, secondary, thumbnail } = this.props;
    console.log(primary, secondary);
    return (
      <Wrapper>
        <Tile
          size={70}
          background={thumbnail}
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
