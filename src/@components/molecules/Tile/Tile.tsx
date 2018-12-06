import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import ImageTile from '@components/atoms/ImageTile';
import IconButton from '@components/atoms/IconButton';
import { setNowPlaying } from '@store/Player/actions';
import playlist from '@assets/Icons/playlist.svg';
import play from '@assets/Icons/play.svg';

import { Props } from './types';
import { Wrapper, Center, Caption, StyledLink } from './styles';

class Tile extends React.PureComponent<Props> {
  static defaultProps: any = {
    type: 'song',
  }

  handleSetNowPlaying = () => {
    const { artistName = '', title = '', id } = this.props;

    this.props.setPlaying(id, artistName, title);
  }

  renderButton = () => {
    switch (this.props.type) {
      case 'song':
        return (
          <Center>
            <IconButton
              onClick={this.handleSetNowPlaying}
              image={play}
              size={40}
            />
          </Center>
        );
      case 'playlist':
        return <StyledLink to={`/playlist/${this.props.id}`} />;
      case 'add':
        return (
          <Center>
            <IconButton
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => this.props.customOnClick(this.props.id)}
              image={playlist}
              size={40}
            />
          </Center>
        );
      default:
        return null;
    }
  }

  render() {
    const { background, name, size, isRound } = this.props;

    return (
      <Wrapper>
        <ImageTile
          background={background}
          size={size}
          isRound={isRound}
        >
          {this.renderButton()}
        </ImageTile>
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
