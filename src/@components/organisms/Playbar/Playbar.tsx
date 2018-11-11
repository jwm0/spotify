import * as React from 'react';
import YouTube from 'react-youtube';

import { Wrapper, Player } from './styles';

class Playbar extends React.PureComponent {
  private player: any;

  handlePlayerReady = (e) => {
    this.player = e.target;
  }

  handlePlayerStateChange = (e) => {
    const { data } = e;

    // INFO: Play next song in queue when song is finished
    if (data === 0) {
      this.player.nextVideo();
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
    if (this.player) {
      this.player.nextVideo();
    }
  }

  handleQueue = () => {
    // TODO: look into this
    this.player.cuePlaylist({
      playlist:  ['kbMqWXnpXcA'],
  });
  }

  render() {
    const opts = {
      height: '100%',
      playerVars: {
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
      <Wrapper>
        Playbar
        <button onClick={this.handlePlay}>play</button>
        <button onClick={this.handlePause}>pause</button>
        <button onClick={this.handleNextSong}>next</button>
        <Player>
          <YouTube
            videoId="kUjKxtJd21E"
            onReady={this.handlePlayerReady}
            onStateChange={this.handlePlayerStateChange}
            opts={opts}
          />
        </Player>
      </Wrapper>
    );
  }
};

export default Playbar;
