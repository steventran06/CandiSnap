import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  Location,
  MapView,
  Permissions
} from 'expo';

import mainStyles from '../../mainStyles';

// stylesheet
const styles = StyleSheet.create({
  callout: {
    borderRadius: 5,
    padding: 10,
  },
  calloutBold: {
    fontWeight: 'bold'
  },
  flex: {
    flex: 1,
  },
  hamburger: {
    borderColor: 'red',
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  topLeftContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  bottomCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
    width: 140,
  },
  switchView: {
    flex: 1,
    height: 50,
    width: 120,
    backgroundColor: '#4B2E83',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchText: {
    color: '#fff',
  },
  profileImage: {
    alignSelf: 'center',
    borderRadius: 75,
    height: 150,
    marginBottom: 15,
    width: 150,
  },
});

export default class MapScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      errorMessage: '',
      switchState: true,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.updateSwitch = this.updateSwitch.bind(this);
  }

  componentWillMount() {
    this.getLocationAsync();
    this.props.navigation.toggleDrawer(); // TESTING ONLY
  }

  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({
      location: {
        latitude: location.coords.latitude || 37.78825,
        longitude: location.coords.longitude || -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    });
  }

  updateSwitch() {
    const { switchState } = this.state;
    console.log('this happening?', switchState);
    this.setState({ switchState: !switchState });
  }

  toggleDrawer() {
    const { navigation } = this.props;
    console.log(navigation);
    navigation.toggleDrawer();
  }

  render() {
    const { location, switchState } = this.state;
    const { navigation } = this.props;

    return (
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        region={location}
        style={styles.flex}
        cacheEnabled={false}
        onPress={this.toggleDrawer}
      >
        <View style={[styles.topLeftContainer, styles.flex]}>
          <TouchableHighlight
            onPress={this.toggleDrawer}
            resizeMode="contain"
            style={styles.hamburger}
          >
            <Image
              source={require('./assets/hamburger-menu.png')}
              style={styles.hamburger}
            />
          </TouchableHighlight>
        </View>

        <View style={[styles.flex, styles.bottomCenterContainer]}>
          <View style={styles.switchView}>
            <Text style={styles.switchText}>Find me!</Text>
            <TouchableHighlight
              style={{ borderWidth: 1 }}
              onPress={this.updateSwitch}
              resizeMode="contain"
            >
              <Switch
                trackColor="#fff"
                value={!switchState}
              />
            </TouchableHighlight>
          </View>
        </View>

        {location && (
          <MapView.Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
            }}
            pinColor="#4B2E83"
          >
            <MapView.Callout
              style={styles.callout}
            >
              <Image
                source={require('./assets/default-user.png')}
                style={styles.profileImage}
              />
              <Text style={styles.calloutBold}>Name:</Text><Text>Name Variable</Text>
              <Text style={styles.calloutBold}>Profile:</Text><Text>Profile Link</Text>
              <Text style={styles.calloutBold}>Rating:</Text><Text>4.81</Text>
            </MapView.Callout>
          </MapView.Marker>
        )}
      </MapView>
    );
  }
}

MapScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
