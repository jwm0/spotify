import * as React from 'react';

import Modal from '@components/organisms/Modal';
import Login from '@components/organisms/Login';
import PlaylistCreator from '@components/organisms/PlaylistCreator';

import { Wrapper, Menu, StyledLink } from './styles';

class Navigation extends React.Component {
  state = {
    isLoginOpen: false,
    isNewPlaylistOpen: false,
  };

  handleShowLoginModal = () => {
    this.setState({ isLoginOpen: true });
  }

  handleCloseLoginModal = () => {
    this.setState({ isLoginOpen: false });
  }

  handleShowPlaylistModal = () => {
    this.setState({ isNewPlaylistOpen: true });
  }

  handleClosePlaylistModal = () => {
    this.setState({ isNewPlaylistOpen: false });
  }

  render() {
    return (
      <>
        <Wrapper>
          <Menu>
            <StyledLink to="/search">Search</StyledLink>
            <StyledLink to="/browse">Home</StyledLink>
            <StyledLink to="/library">My Music</StyledLink>
            <button onClick={this.handleShowLoginModal}>Login</button>
            <button onClick={this.handleShowPlaylistModal}>new playlist</button>
          </Menu>
        </Wrapper>
        {this.state.isLoginOpen &&
          <Modal
            isOpen={true}
            onClose={this.handleCloseLoginModal}
          >
            <Login />
          </Modal>
        }
        {this.state.isNewPlaylistOpen &&
          <Modal
            isOpen={true}
            onClose={this.handleClosePlaylistModal}
          >
            <PlaylistCreator />
          </Modal>
        }
      </>
    );
  }
}

export default Navigation;
