import * as React from 'react';
import { connect } from 'react-redux';
import { Duration } from 'luxon';
import { get } from 'lodash';

import UserPlaylists from '@components/organisms/UserPlaylists';
import IconButton from '@components/atoms/IconButton';
import { setNowPlaying, addSongToQueue } from '@store/Player/actions';
import play from '@assets/Icons/play.svg';
import playlist from '@assets/Icons/playlist.svg';
import queue from '@assets/Icons/queue.svg';

import { Wrapper, Details, DurationText, Primary, Secondary } from './styles';
import { Props } from './types';

const getDuration = (duration: string) =>
  Duration.fromISO(duration).toFormat('m:ss');

class SongListItem extends React.PureComponent<Props> {
  state = {
    showPlaylists: false,
  };

  handleSetNowPlaying = () => {
    const { artistName, title, id } = this.props;

    this.props.setPlaying(id, artistName, title);
  }

  handleCueSong = () => {
    const { artistName, title, id } = this.props;

    this.props.cueSong(id, artistName, title);
  }

  handleShowPlaylists = () => {
    this.setState({ showPlaylists: true });
  }

  handleHidePlaylists = () => {
    this.setState({ showPlaylists: false });
  }

  render() {
    const {
      artistName, title, duration,
      id, nowPlayingId,
    } = this.props;
    const isPlaying = id === nowPlayingId;

    return (
      <>
        <Wrapper active={isPlaying}>
          <IconButton
            onClick={this.handleSetNowPlaying}
            image={play}
            size={20}
          />
          <Details>
            <Primary active={isPlaying}>{title}</Primary>
            <Secondary>{artistName}</Secondary>
          </Details>
          <IconButton
            onClick={this.handleShowPlaylists}
            image={playlist}
            size={20}
          />
          <IconButton
            onClick={this.handleCueSong}
            image={queue}
            size={20}
          />
          <DurationText>{getDuration(duration)}</DurationText>
        </Wrapper>
        {this.state.showPlaylists &&
          <UserPlaylists
            onClose={this.handleHidePlaylists}
            songId={id}
          />
        }
      </>
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
