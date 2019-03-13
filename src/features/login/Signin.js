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
    this.logInUser = this.logInUser.bind(this);
    this.goToSignup = this.goToSignup.bind(this);
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

  logInUser() {
    const { navigate } = this.props.navigation;
    navigate('Map');

    // // update our indicatorIOS spinner
    // this.setState({
    //   // will toggle on Activity Indicator when true;
    //   isLoading: true
    // });
    // // Using Firebase to authenticate
    // var that = this;
    // var ref = new Firebase("https://morning-routine.firebaseio.com");
    // ref.authWithPassword({
    //   email: that.state.email,
    //   password: that.state.password
    // }, function(error, authData) {
    //   if (error) {
    //     that.setState({
    //       isLoading: false
    //     });
    //     console.log("Login Failed!", error);
    //     // Shows error on client if login fails
    //     that.setState({
    //       error: 'Login failed'
    //     });

    //   } else {
    //     console.log("Authenticated successfully with payload:", authData);
    //     // navigate to HomeAddress
    //     that.props.navigator.push({
    //       component: HomeAddress,
    //       passProps: {
    //         auth: authData.uid,
    //         colorArr: that.state.colorArr,
    //         color: that.state.color
    //       }
    //     });
    //     that.setState({
    //       isLoading: false
    //     });
    //   }
    // });

    // setTimeout(() => {
    //   //Afterwards, clear state for login component
    //   this.setState({
    //     error: false,
    //     email: '',
    //     password: ''
    //   });
    // }, 3000);
  }

  goToSignup() {
    const { navigate } = this.props.navigation;
    navigate('Signup');
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
            onPress={this.logInUser}
            underlayColor="white"
          >
            <Text style={mainStyles.buttonText}>LOG IN</Text>
          </TouchableHighlight>

          <Text style={[styles.text, mainStyles.center]}>Do not have an account?</Text>
          <TouchableHighlight
            onPress={this.goToSignup}
            underlayColor="white"
          >
            <Text style={[mainStyles.linkText, mainStyles.center]}>Sign up now!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
