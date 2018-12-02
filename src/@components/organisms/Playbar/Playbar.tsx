import * as React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { get } from 'lodash';
import Slider from 'rc-slider/lib/Slider';

import { playNextSong, playPreviousSong } from '@store/Player/actions';
import PlayerControls, { CustomHandle } from '@components/molecules/PlayerControls';
import { trackStyle, railStyle, Button } from '@components/molecules/PlayerControls/styles';
import VideoIcon from '@assets/Icons/video.svg';
import VolumeIcon from '@assets/Icons/volume.svg';

import {
  Wrapper, Player, SongInfo,
  Primary, Secondary, MoreControls,
} from './styles';
import { Props, State } from './types';
import Icon from '@components/atoms/Icon';

class Playbar extends React.PureComponent<Props, State> {
  private player: any;
  private durationInterval: any;
  state = {
    currentTime: 0,
    duration: 0,
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
    this.clearDurationInterval();
    this.setState({ duration: this.player.getDuration() });
    this.setDurationInterval();
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

  setDurationInterval = () => {
    this.durationInterval = setInterval(() => {
      const currentTime = this.player.getCurrentTime();
      this.setState({ currentTime });
    }, 200);
  }

  clearDurationInterval = () => {
    clearInterval(this.durationInterval);
  }

  handleSliderChange = (value) => {
    this.setState({ currentTime: value });
  }

  handleTimeChange = (value) => {
    if (this.player) {
      this.player.seekTo(value, true);
    }
  }

  handlePreviousSong = () => {
    if (this.state.currentTime > 5) {
      this.player && this.player.seekTo(0, true);
    } else {
      this.props.prevSong();
    }
  }

  handleVolumeChange = (value) => {
    if (this.player) {
      this.player.isMuted() && this.player.unMute();
      this.player.setVolume(value);
    }
  }

  handleMute = () => {
    if (this.player) {
      this.player.isMuted() ? this.player.unMute() : this.player.mute();
    }
  }

  isPlaying = () => {
    if (this.player) {
      return this.player.getPlayerState() === 1;
    }
    return false;
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
          isPlaying={this.isPlaying()}
          onPlay={this.handlePlay}
          onNext={this.props.nextSong}
          onPrev={this.handlePreviousSong}
          songDuration={this.state.duration}
          onSkippingBegin={this.clearDurationInterval}
          onSliderChange={this.handleSliderChange}
          onSkippingDone={this.handleTimeChange}
          currentTime={this.state.currentTime}
        />
        <MoreControls>
          <Button onClick={this.toggleVideoPlayer}>
            <Icon
              image={VideoIcon}
              size={20}
            />
          </Button>
          <Button onClick={this.handleMute}>
            <Icon
              image={VolumeIcon}
              size={20}
            />
          </Button>
          <Slider
            defaultValue={100}
            onChange={this.handleVolumeChange}
            trackStyle={trackStyle}
            railStyle={railStyle}
            handle={CustomHandle}
          />
        </MoreControls>
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
