import * as React from 'react';
import YouTube from 'react-youtube';

import { Wrapper, Player } from './styles';

class Playbar extends React.PureComponent {
  private player: any;

  handlePlayerReady = (e) => {
    console.log(e);
    this.player = e.target;
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
        <Player>
          <YouTube
            videoId="kUjKxtJd21E"
            onReady={this.handlePlayerReady}
            opts={opts}
          />
        </Player>
      </Wrapper>
    );
  }
};

export default Playbar;
