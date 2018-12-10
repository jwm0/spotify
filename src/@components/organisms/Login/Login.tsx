import * as React from 'react';
import { connect } from 'react-redux';

import { requestLogin } from '@store/User/actions';

import { PROVIDER, Props } from './types';
import { Wrapper, LoginButton, Header } from './styles';

class Login extends React.PureComponent<Props> {
  handleLogin = (provider: PROVIDER) => () => {
    this.props.loginWith(provider);
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.handleClose();
    }
  }

  render() {
    return (
      <Wrapper>
        <Header>
          Create an account to make and save playlists!
        </Header>
        <LoginButton
          color="#3b5998"
          onClick={this.handleLogin(PROVIDER.FACEBOOK)}
        >
          login with facebook
        </LoginButton>
        <LoginButton
          color="#d62d20"
          onClick={this.handleLogin(PROVIDER.GOOGLE)}
        >
          login with google
        </LoginButton>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.uid,
});

const mapDispatchToProps = dispatch => ({
  loginWith: (provider: PROVIDER) => dispatch(requestLogin(provider)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
