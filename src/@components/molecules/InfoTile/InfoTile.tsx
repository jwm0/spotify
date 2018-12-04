import * as React from 'react';

import Tile from '@components/molecules/Tile';

import { Props } from './types';
import { Wrapper, Description, Primary, Secondary } from './styles';

class InfoTile extends React.PureComponent<Props> {
  render() {
    const {
      id, primary, secondary, thumbnail,
      isRound, type,
    } = this.props;

    return (
      <Wrapper>
        <Tile
          size={70}
          background={thumbnail}
          isRound={isRound}
          title={primary}
          artistName={secondary}
          id={id}
          type={type}
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
