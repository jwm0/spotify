import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { setNowPlaying } from '@store/Player/actions';

import { Props } from './types';
import { Wrapper, Box, PlayButton, Caption } from './styles';

class Tile extends React.PureComponent<Props> {
  handleSetNowPlaying = () => {
    const { artistName = '', title = '', id } = this.props;

    this.props.setPlaying(id, artistName, title);
  }

  render() {
    const { background, name, size, isRound } = this.props;

    return (
      <Wrapper>
        <Box
          background={background}
          size={size}
          isRound={isRound}
        >
          <PlayButton onClick={this.handleSetNowPlaying} />
        </Box>
        {name && <Caption>{name}</Caption>}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  nowPlayingId: get(state.player.queue[state.player.nowPlaying], 'id', ''),
});

const mapDispatchToProps = dispatch => ({
  setPlaying: (id, artist, title) => dispatch(setNowPlaying(id, artist, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
