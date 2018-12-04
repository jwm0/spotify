import * as React from 'react';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';

import TileGrid from '@components/organisms/TileGrid';
import { requestAddSongToPlaylist } from '@store/User/actions';

import {
  ModalBackdrop, ModalBody, ModalClose,
} from './styles';
import { Props, State } from './types';

class Modal extends React.PureComponent<Props, State> {
  private backdrop: React.RefObject<any>;

  static defaultProps = {
    isActive: true,
    isOpen: false,
    size: 'full',
  };

  constructor(props) {
    super(props);

    this.backdrop = React.createRef();
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this._onEscapePress);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'initial';
    document.removeEventListener('keydown', this._onEscapePress);
  }

  _onEscapePress = (event) => {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  }

  render() {
    const { onClose } = this.props;

    return createPortal(
              <ModalBackdrop
                ref={this.backdrop}
              >
                <ModalClose
                  onClick={onClose}
                >
                  x
                </ModalClose>
                <ModalBody>
                  <TileGrid
                    tiles={this.props.playlists}
                    type="add"
                    customOnClick={this.props.addToPlaylist}
                  />
                </ModalBody>
              </ModalBackdrop>,
              document.body,
            );
  }
}

const mapStateToProps = state => ({
  playlists: state.user.playlists,
});

const mapDispatchToProps = (dispatch, props) => ({
  addToPlaylist: (playlistId) => dispatch(requestAddSongToPlaylist(playlistId, props.songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
