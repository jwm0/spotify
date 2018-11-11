import * as React from 'react';
import { Duration } from 'luxon';

import Icon from '@components/atoms/Icon';
import heart_empty from '@assets/Icons/heart_empty.svg';
import playlist from '@assets/Icons/playlist.svg';

import { Wrapper, Details, DurationText, Primary, Secondary } from './styles';
import { Props } from './types';

const getDuration = (duration: string) =>
  Duration.fromISO(duration).toFormat('m:ss');

class SongListItem extends React.PureComponent<Props> {
  render() {
    const {
      artistName, title, duration,
    } = this.props;

    return (
      <Wrapper>
        <Icon
          image={heart_empty}
          size={20}
        />
        <Details>
          <Primary>{title}</Primary>
          <Secondary>{artistName}</Secondary>
        </Details>
        <Icon
          image={playlist}
          size={20}
        />
        <DurationText>{getDuration(duration)}</DurationText>
      </Wrapper>
    );
  }
}

export default SongListItem;
