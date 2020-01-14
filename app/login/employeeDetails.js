import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {data} from '../json';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Toast from 'react-native-simple-toast';
import {COMING_SOON, EMPLOYEE_DETAILS} from '../strings';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(18),
    flexDirection: 'row',
    margin: 12,
    backgroundColor: '#3d0764',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(3),
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  imageStyle: {
    width: 80,
    height: 80,
    position: 'absolute',
    right: responsiveWidth(5),
  },
  viewStyle: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    alignSelf: 'flex-end',
  },
  titleStyle: {
    color: '#8b8a84',
    fontSize: 20,
    margin: 6,
    fontFamily: 'Arial-BoldMT',
  },
  subTitleStyle: {
    color: '#ffffff',
    margin: 6,
    fontFamily: 'Arial-BoldMT',
  },
  nameStyle: {
    color: '#ffffff',
    position: 'absolute',
    top: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
    left: 6,
    fontFamily: 'Arial-BoldMT',
  },
});

export default class EmployeeDetails extends Component {
  static navigationOptions = {
    title: EMPLOYEE_DETAILS,
    headerStyle: {
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitleStyle: {
      color: '#3d0764',
      alignSelf: 'center',
    },
  };
  constructor(props) {
    super(props);
    this.comingSoon = this.comingSoon.bind(this);
  }

  comingSoon() {
    Toast.show(COMING_SOON);
  }

  render() {
    const {
      container,
      imageStyle,
      viewStyle,
      titleStyle,
      subTitleStyle,
      imageContainer,
      nameStyle,
    } = styles;
    const lapsList = data.users.map(u => {
      return (
        <TouchableOpacity style={container} onPress={this.comingSoon}>
          <Text style={nameStyle}>{u.name.toUpperCase()}</Text>

          <Image
            style={imageStyle}
            source={require('../assets/images/user.png')}
          />

          <View style={viewStyle}>
            <Text style={titleStyle}>{u.email}</Text>
            <Text style={subTitleStyle}>{u.phoneNo}</Text>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <ImageBackground
        style={imageContainer}
        source={require('../assets/images/backgroundImage.jpg')}>
        <ScrollView style={{flex: 1, marginHorizontal: responsiveWidth(2)}}>
          {lapsList}
        </ScrollView>
      </ImageBackground>
    );
  }
}
