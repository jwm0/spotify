import * as React from 'react';
import { connect } from 'react-redux';

import Modal from '@components/organisms/Modal';
import Login from '@components/organisms/Login';
import PlaylistCreator from '@components/organisms/PlaylistCreator';
// import Icon from '@components/atoms/Icon';

import {
  Wrapper, Menu, StyledLink, NewPlaylistButton,
  LoginButton,
} from './styles';
import { Props } from './types';

class Navigation extends React.Component<Props> {
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
            <StyledLink to="/browse" >Home</StyledLink>
            <StyledLink to="/library" >My Music</StyledLink>
            {this.props.isLoggedIn &&
              <NewPlaylistButton onClick={this.handleShowPlaylistModal}>
                <span>+ New Playlist</span>
              </NewPlaylistButton>
            }
            {this.props.isLoggedIn ?
              <LoginButton onClick={this.handleShowLoginModal}>Logout</LoginButton> :
              <LoginButton onClick={this.handleShowLoginModal}>Login</LoginButton>
            }
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

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.uid,
});

export default connect(mapStateToProps)(Navigation);
