import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
const PageBackground = ({children}) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('../assets/images/background.png')}>
      {children}
    </ImageBackground>
  );
};

export default PageBackground;
