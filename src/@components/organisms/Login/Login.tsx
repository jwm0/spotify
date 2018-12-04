import * as React from 'react';
import { connect } from 'react-redux';

import { requestLogin, requestLogout } from '@store/User/actions';

import { PROVIDER, Props } from './types';
import { Wrapper, LoginButton } from './styles';

class Login extends React.PureComponent<Props> {
  handleLogin = (provider: PROVIDER) => () => {
    this.props.loginWith(provider);
  }

  render() {
    return (
      <Wrapper>
        <LoginButton
          color="blue"
          onClick={this.handleLogin(PROVIDER.FACEBOOK)}
        >
          login with facebook
        </LoginButton>
        <LoginButton
          color="red"
          onClick={this.handleLogin(PROVIDER.GOOGLE)}
        >
          login with google
        </LoginButton>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginWith: (provider: PROVIDER) => dispatch(requestLogin(provider)),
  logout: () => dispatch(requestLogout),
});

export default connect(null, mapDispatchToProps)(Login);
