import * as React from 'react';

import Icon from '@components/atoms/Icon';

import { Wrapper, Details, Duration } from './styles';

class SongListItem extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Icon image={''} />
        <Details>
          Song Name
        </Details>
        <div>star</div>
        <div>queue</div>
        <Duration>3:31</Duration>
      </Wrapper>
    );
  }
}

export default SongListItem;
