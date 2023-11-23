import React from 'react';
import {Image, Text, View} from 'react-native';
import globalStyles from '../decorations/globalStyles';

const Loader = () => {
  return (
    <View style={globalStyles.loaderContainer}>
      <Image
        source={require('../assets/images/mobile-dark.png')}
        style={globalStyles.loaderMobileIcon}
      />
      <Text style={globalStyles.loaderTitle}>Loading Product Data</Text>
      <Text style={globalStyles.loaderSubtitle}>Please Wait...</Text>
    </View>
  );
};

export default Loader;
