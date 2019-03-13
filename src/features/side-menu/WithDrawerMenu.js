import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Image,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import MapScreen from '../map/MapScreen';
import UserPhotos from '../user-photos/UserPhotos';
import IndividualPhoto from '../user-photos/IndividualPhoto';
import SideMenu from './snippets/SideMenu';

// stylesheet
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  profileImage: {
    borderRadius: 40,
    height: 80,
    left: 35,
    margin: 15,
    width: 80,
  },
});

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/default-user.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>HELLOOOOOOO</Text>
        <Text>HELLOOOOOOO</Text>
        <Text>HELLOOOOOOO</Text>
        <Text>HELLOOOOOOO</Text>
        <Text>HELLOOOOOOO</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Photos')}
          title="Go back home"
        />
      </View>
    );
  }
}

export default createDrawerNavigator({
  Map: { screen: MapScreen },
  Photos: { screen: UserPhotos },
  IndividualPhoto: { screen: IndividualPhoto },
  Notifications: { screen: MyNotificationsScreen },
},
{
  initialRouteName: 'Map',
  contentComponent: SideMenu,
  drawerWidth: 325,
  drawerType: 'slide',
});

MyNotificationsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
