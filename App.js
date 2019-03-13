import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Signin from './src/features/login/Signin';
import Signup from './src/features/login/Signup';
import MapScreen from './src/features/map/MapScreen';
import WithDrawerMenu from './src/features/side-menu/WithDrawerMenu';

const MainNavigator = createSwitchNavigator({
  Signin: { screen: Signin },
  Signup: { screen: Signup },
  Map: { screen: WithDrawerMenu },
},
{
  headerMode: 'none',
  initialRouteName: 'Signin',
});

const App = createAppContainer(MainNavigator);

export default App;
