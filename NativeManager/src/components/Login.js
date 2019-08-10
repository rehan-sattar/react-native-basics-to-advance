import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button, Spinner
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
    signIn({ email, password });
  };

  renderError = () => {
    const { error } = this.props;
    const erroJSX = (
      <View style={{ background: 'white' }}>
        <Text style={styles.errorStyles}>{error}</Text>
      </View>
    );
    return error ? erroJSX : null;
  };

  renderLoading = () => {
    const { loading } = this.props;
    return loading ? <Spinner /> : null;
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
        {this.renderError()}
        {this.renderLoading()}
        <CardSection>
          <Button onPress={this.handleUserSignIn}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyles: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center'
  }
};

const mapStateToProps = ({ auth }) => console.log('NEW STATE::: ', auth) || {
  email: auth.email,
  password: auth.password,
  error: auth.error,
  loading: auth.loading
};

export default connect(
  mapStateToProps,
  actions
)(Login);
