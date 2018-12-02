import * as React from 'react';
import Slider from 'rc-slider/lib/Slider';
import { Duration } from 'luxon';
import 'rc-slider/assets/index.css';

import Icon from '@components/atoms/Icon';
import PlayIcon from '@assets/Icons/play_button.svg';
import PauseIcon from '@assets/Icons/pause_button.svg';
import NextIcon from '@assets/Icons/next_button.svg';
import PrevIcon from '@assets/Icons/previous_button.svg';

import {
  Wrapper, Controls, ProgressBar, Time,
  StyledHandle, railStyle, trackStyle, Button,
} from './styles';
import { Props } from './types';

const getDuration = (duration: number) =>
  Duration.fromMillis(duration * 1000).toFormat('m:ss');

export const CustomHandle = (props) => {
  const { index, offset } = props;

  return (
    <StyledHandle
      key={index}
      offset={offset}
    />
  );
};

class PlayerControls extends React.PureComponent<Props> {
  render() {
    return (
      <Wrapper>
        <Controls>
          <Button onClick={this.props.onPrev}>
            <Icon
              image={PrevIcon}
              size={15}
            />
          </Button>
          <Button onClick={this.props.onPlay}>
            <Icon
              image={this.props.isPlaying ? PauseIcon : PlayIcon}
              size={40}
            />
          </Button>
          <Button onClick={this.props.onNext}>
            <Icon
              image={NextIcon}
              size={15}
            />
          </Button>
        </Controls>
        <ProgressBar>
          <Time left>{getDuration(this.props.currentTime)}</Time>
          <Slider
            onBeforeChange={this.props.onSkippingBegin}
            onChange={this.props.onSliderChange}
            onAfterChange={this.props.onSkippingDone}
            max={this.props.songDuration}
            value={this.props.currentTime}
            handle={CustomHandle}
            trackStyle={trackStyle}
            railStyle={railStyle}
          />
          <Time>{getDuration(this.props.songDuration)}</Time>
        </ProgressBar>
      </Wrapper>
    )
  }
};

export default PlayerControls;
