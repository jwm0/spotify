import * as React from 'react';

import Icon from '@components/atoms/Icon';

import { Wrapper, Details, Duration } from './styles';
import { Props } from './types';

class SongListItem extends React.PureComponent<Props> {
  render() {
    const {
      artistName, duration, title,
    } = this.props;

    return (
      <Wrapper>
        <Icon image={''} />
        <Details>
          <div>{title}</div>
          <div>{artistName}</div>
        </Details>
        <div>star</div>
        <div>queue</div>
        <Duration>{duration}</Duration>
      </Wrapper>
    );
  }
}

export default SongListItem;
