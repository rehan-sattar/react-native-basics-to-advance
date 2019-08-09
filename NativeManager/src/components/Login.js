import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button
} from './common';
import * as actions from '../actions';

class Login extends Component {
  handleChangeEmail = (email) => {
    const { emailChanged } = this.props;
    emailChanged(email);
  };

  handleChangePassword = (password) => {
    const { passwordChanged } = this.props;
    passwordChanged(password);
  };

  handleUserSignIn = () => {
    const { signIn, email, password } = this.props;
    console.log(email, password);
    signIn({ email, password });
  };

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            onChangeText={this.handleChangeEmail}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.handleChangePassword}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleUserSignIn}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password
});

export default connect(
  mapStateToProps,
  actions
)(Login);
