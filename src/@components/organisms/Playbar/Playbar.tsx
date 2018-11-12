import * as React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { get } from 'lodash';

import { playNextSong, playPreviousSong } from '@store/Player/actions';

import {
  Wrapper, Player, SongInfo,
  Primary, Secondary,
} from './styles';
import { Props } from './types';

class Playbar extends React.PureComponent<Props> {
  private player: any;

  handlePlayerReady = (e) => {
    this.player = e.target;
  }

  handlePlayerStateChange = (e) => {
    const { data } = e;

    // INFO: Play next song in queue when song is finished
    if (data === 0) {
      this.handleNextSong();
    }
  }

  handlePlay = () => {
    if (this.player) {
      this.player.playVideo();
    }
  }

  handlePause = () => {
    if (this.player) {
      this.player.pauseVideo();
    }
  }

  handleNextSong = () => {
    this.props.nextSong();
  }

  render() {
    const { nowPlaying, queue } = this.props.player;
    const id = get(queue[nowPlaying], 'id', '');
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
          <Primary>{nowPlaying.title}</Primary>
          <Secondary>{nowPlaying.artist}</Secondary>
        </SongInfo>
        <div>
          <button onClick={this.handlePlay}>play</button>
          <button onClick={this.handlePause}>pause</button>
          <button onClick={this.handleNextSong}>next</button>
        </div>
        <div>
          controls
        </div>
      </Wrapper>
      <Player>
        <YouTube
          videoId={id}
          onReady={this.handlePlayerReady}
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
