import * as React from 'react';
import Slider from 'rc-slider/lib/Slider';
import { Duration } from 'luxon';
import 'rc-slider/assets/index.css';

import { Wrapper, Controls, ProgressBar, Time } from './styles';
import { Props } from './types';

const getDuration = (duration: number) =>
  Duration.fromMillis(duration * 1000).toFormat('m:ss');

class PlayerControls extends React.PureComponent<Props> {
  render() {
    return (
      <Wrapper>
        <Controls>
          <button onClick={this.props.onPrev}>prev</button>
          <button onClick={this.props.onPlay}>play/pause</button>
          <button onClick={this.props.onNext}>next</button>
        </Controls>
        <ProgressBar>
          <Time left>{getDuration(this.props.currentTime)}</Time>
          <Slider
            onBeforeChange={this.props.onSkippingBegin}
            onChange={this.props.onSliderChange}
            onAfterChange={this.props.onSkippingDone}
            max={this.props.songDuration}
            value={this.props.currentTime}
          />
          <Time>{getDuration(this.props.songDuration)}</Time>
        </ProgressBar>
      </Wrapper>
    )
  }
};

export default PlayerControls;
