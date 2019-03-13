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
  profileImage: {
    alignSelf: 'center',
    borderRadius: 75,
    height: 150,
    marginTop: 60,
    marginBottom: 30,
    width: 150,
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 165,
    height: 110,
    margin: 10,
    alignSelf: 'flex-start',
  },
});

const UserPhotos = ({ navigation, photos }) => {
  const imageRows = [];
  const size = 2;

  while (photos.length > 0) {
    imageRows.push(photos.splice(0, size));
  }

  return (
    <View style={mainStyles.fullView}>
      <Image
        style={styles.profileImage}
        source={require('./assets/default-user.png')}
      />

      <ScrollView>
        {imageRows.map((arr) => (
          <View key={arr} style={styles.imageRow}>
            {arr.map((photo) => (
              <TouchableOpacity
                key={photo}
                onPress={() => navigation.navigate('IndividualPhoto', { photo })}
              >
                <Image
                  style={styles.image}
                  source={images[`image${photo}`]}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

UserPhotos.propTypes = {
  photos: PropTypes.array,
};

UserPhotos.defaultProps = {
  photos: [1, 2 ,3, 4, 5, 6, 7, 8],
};

export default UserPhotos;