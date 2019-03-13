
import PropTypes from 'prop-types';
import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  navItemStyle: {
    borderWidth: 1,
    padding: 20,
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  profileImage: {
    borderRadius: 50,
    height: 100,
    marginLeft: 30,
    width: 100,
  },
  sideBySide: {
    justifyContent: 'center',
    flex: 1,
  },
  topSection: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
  }
});

const SideMenu = ({ navigation }) => {
  const navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    navigation.dispatch(navigateAction);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.sideBySide}>
          <Image
            source={require('../assets/default-user.png')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.sideBySide}>
          <Text>Name</Text>
          <Text>View Profile</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('Photos')}
            >
              My Photos
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('Notifications')}
            >
              Notifications
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('PaymentInfo')}
            >
              Payment Info
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('PaymentInfo')}
            >
              Settings
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('PaymentInfo')}
            >
              Help
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text>This is my fixed footer</Text>
      </View>
    </View>
  );
}

SideMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SideMenu;
