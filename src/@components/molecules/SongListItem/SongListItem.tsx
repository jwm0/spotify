import * as React from 'react';
import { connect } from 'react-redux';
import { Duration } from 'luxon';
import { get } from 'lodash';

import Icon from '@components/atoms/Icon';
import { setNowPlaying, addSongToQueue } from '@store/Player/actions';
import heart_empty from '@assets/Icons/heart_empty.svg';
import playlist from '@assets/Icons/playlist.svg';

import { Wrapper, Details, DurationText, Primary, Secondary } from './styles';
import { Props } from './types';

const getDuration = (duration: string) =>
  Duration.fromISO(duration).toFormat('m:ss');

class SongListItem extends React.PureComponent<Props> {
  handleSetNowPlaying = () => {
    const { artistName, title, id } = this.props;

    this.props.setPlaying(id, artistName, title);
  }

  handleCueSong = () => {
    const { artistName, title, id } = this.props;

    this.props.cueSong(id, artistName, title);
  }

  render() {
    const {
      artistName, title, duration,
      id, nowPlayingId,
    } = this.props;
    const isPlaying = id === nowPlayingId;

    return (
      <Wrapper active={isPlaying}>
        <Icon
          image={heart_empty}
          size={20}
        />
        <Details>
          <Primary>{title}</Primary>
          <Secondary>{artistName}</Secondary>
          <button onClick={this.handleSetNowPlaying}>play</button>
        </Details>
        <button onClick={this.handleCueSong}>
          <Icon
            image={playlist}
            size={20}
          />
        </button>
        <DurationText>{getDuration(duration)}</DurationText>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  nowPlayingId: get(state.player.queue[state.player.nowPlaying], 'id', ''),
});

const mapDispatchToProps = dispatch => ({
  cueSong: (id, artist, title) => dispatch(addSongToQueue(id, artist, title)),
  setPlaying: (id, artist, title) => dispatch(setNowPlaying(id, artist, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongListItem);
