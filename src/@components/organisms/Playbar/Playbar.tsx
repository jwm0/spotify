import * as React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { get } from 'lodash';
import Slider from 'rc-slider/lib/Slider';

import { playNextSong, playPreviousSong } from '@store/Player/actions';

import {
  Wrapper, Player, SongInfo,
  Primary, Secondary,
} from './styles';
import { Props, State } from './types';
import PlayerControls from '@components/molecules/PlayerControls';

class Playbar extends React.PureComponent<Props, State> {
  private player: any;
  private durationInterval: any;
  state = {
    currentTime: 0,
    showVideo: false,
  };

  componentWillUnmount(){
    clearInterval(this.durationInterval);
  }

  handlePlayerReady = (e) => {
    this.player = e.target;
  }

  handleSongStarted = () => {
    // TODO: Look into this
    clearInterval(this.durationInterval);
    this.durationInterval = setInterval(() => {
      const currentTime = this.player.getCurrentTime();
      this.setState({ currentTime });
    }, 1000);
  }

  handlePlayerStateChange = (e) => {
    const { data } = e;

    // INFO: Play next song in queue when song is finished
    if (data === 0) {
      this.props.nextSong();
    }
  }

  handlePlay = () => {
    if (this.player) {
      const playerState = this.player.getPlayerState();
      if (playerState === 1) {
        this.player.pauseVideo();
      } else {
        this.player.playVideo();
      }
    }
  }

  handleTimeChange = (value) => {
    this.player.seekTo(value, true);
  }

  handleVolumeChange = (value) => {
    this.player.setVolume(value);
  }

  toggleVideoPlayer = () => {
    this.setState(state => ({ showVideo: !state.showVideo }));
  }

  render() {
    const { nowPlaying, queue } = this.props.player;
    const song = queue[nowPlaying] || {};
    const id = get(song, 'id', '');
    const opts = {
      height: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        // disablekb: 0 KEYBOARD DISABLE
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
      width: '100%',
    };

    return (
      <>
      <Wrapper>
        <SongInfo>
          <Primary>{song.title}</Primary>
          <Secondary>{song.artist}</Secondary>
        </SongInfo>
        <PlayerControls
          onPlay={this.handlePlay}
          onNext={this.props.nextSong}
          onPrev={this.props.prevSong}
        />
        <div>
          {this.state.currentTime}
          <Slider
            defaultValue={100}
            onChange={this.handleVolumeChange}
          />
          <button onClick={this.toggleVideoPlayer}>show video</button>
        </div>
      </Wrapper>
      <Player show={this.state.showVideo}>
        <YouTube
          videoId={id}
          onReady={this.handlePlayerReady}
          onPlay={this.handleSongStarted}
          onStateChange={this.handlePlayerStateChange}
          opts={opts}
        />
      </Player>
      </>
    );
  }
};

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => ({
  nextSong: () => dispatch(playNextSong()),
  prevSong: () => dispatch(playPreviousSong()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
