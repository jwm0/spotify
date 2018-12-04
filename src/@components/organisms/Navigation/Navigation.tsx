import * as React from 'react';

import Modal from '@components/organisms/Modal';
import Login from '@components/organisms/Login';

import { Wrapper, Menu, StyledLink } from './styles';

class Navigation extends React.Component {
  state = {
    isLoginOpen: false,
  };

  handleShowModal = () => {
    this.setState({ isLoginOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ isLoginOpen: false });
  }
  render() {
    return (
      <>
        <Wrapper>
          <Menu>
            <StyledLink to="/search">Search</StyledLink>
            <StyledLink to="/browse">Home</StyledLink>
            <StyledLink to="/library">My Music</StyledLink>
            <button onClick={this.handleShowModal}>Login</button>
          </Menu>
        </Wrapper>
        {this.state.isLoginOpen &&
          <Modal
            isOpen={true}
            onClose={this.handleCloseModal}
          >
            <Login />
          </Modal>
        }
      </>
    );
  }
}

export default Navigation;
