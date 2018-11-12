import * as React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import { Wrapper, Controls, ProgressBar } from './styles';

class PlayerControls extends React.PureComponent<any> {
  render() {
    return (
      <Wrapper>
        <Controls>
          <button onClick={this.props.onPrev}>prev</button>
          <button onClick={this.props.onPlay}>play/pause</button>
          <button onClick={this.props.onNext}>next</button>
        </Controls>
        <ProgressBar>
          <Slider />
        </ProgressBar>
      </Wrapper>
    )
  }
};

export default PlayerControls;
