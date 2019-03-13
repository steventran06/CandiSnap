import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';
import mainStyles from '../../mainStyles';

// stylesheet
const styles = StyleSheet.create({
  loginWrap: {
    padding: 20,
    marginTop: 90,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center'
  },
  text: {
    color: '#fff'
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
});

export default class Signin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.createUser = this.createUser.bind(this);
    this.goToSignin = this.goToSignin.bind(this);
  }

  createUser() {
    const { navigate } = this.props.navigation;
    navigate('Map');
  }

  handleEmail(event) {
    this.setState({
      email: event.nativeEvent.text
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.nativeEvent.text
    });
  }

  goToSignin() {
    const { navigate } = this.props.navigation;
    navigate('Signin');
  }

  render() {
    // Show an error if API request fails
    const showErr = (
      this.state.error ? <Text style={styles.text}> {this.state.error} </Text> : null
    );

    return (
      <View style={mainStyles.fullView}>
        <View style={styles.loginWrap}>
          <Image
            style={styles.logo}
            source={require('./assets/morningroutineiconLRG.png')}
          />
          <Text style={styles.title}>CandiSnap</Text>

          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            style={mainStyles.input}
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
          />

          <Text style={styles.text}>Password</Text>
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            style={mainStyles.input}
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          { showErr }

          <TouchableHighlight
            style={mainStyles.button}
            onPress={this.goToSignin}
            underlayColor="white"
          >
            <Text style={mainStyles.buttonText}>SIGN UP</Text>
          </TouchableHighlight>

          <Text style={[styles.text, mainStyles.center]}>Have an account?</Text>
          <TouchableHighlight
            onPress={this.goToSignin}
            underlayColor="white"
          >
            <Text style={[mainStyles.linkText, mainStyles.center]}>Log in</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
