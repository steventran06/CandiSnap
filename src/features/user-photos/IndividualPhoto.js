import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import images from './assets';
import mainStyles from '../../mainStyles';

// stylesheet
const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    alignSelf: 'center',
    width: 330,
    height: 220,
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    margin: 15,
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const IndividualPhoto = ({ navigation }) => {
  const photo = navigation.state.params.photo;
  return (
    <View style={mainStyles.fullView}>
      <View style={styles.centerAll}>
        <Image
          style={styles.mainImage}
          source={images[`image${photo}`]}
        />
        <View style={styles.iconRow}>
          <Image
            style={styles.icon}
            source={images.buy}
          />
          <Image
            style={styles.icon}
            source={images.download}
          />
          <Image
            style={styles.icon}
            source={images.facebook}
          />
          <Image
            style={styles.icon}
            source={images.instagram}
          />
        </View>
      </View>
    </View>
  );
}

export default IndividualPhoto;