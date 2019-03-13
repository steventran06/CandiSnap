import React from 'react';
import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  center: {
    textAlign: 'center'
  },
  fullView: {
    backgroundColor: '#4B2E83',
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  input: {
    backgroundColor: 'white',
    paddingLeft: 15,
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  linkText: {
    color: 'gold',
  },
  button: {
    height: 45,
    width: 200,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#022c3d',
    padding: 10,
    fontSize: 20
  },
});

export default mainStyles;
