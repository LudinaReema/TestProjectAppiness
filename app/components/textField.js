import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  inputStyle: {
    paddingVertical: responsiveHeight(2),
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    color: 'white',
    width: responsiveWidth(80),
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: responsiveWidth(3),
    fontFamily: 'Arial-BoldMT',
    marginVertical: responsiveHeight(1.5),
  },
});
export default class textField extends Component {
  hideError = errors => {
    if (errors !== '') {
      return (
        <Text
          style={{
            color: 'white',
            fontSize: responsiveFontSize(2),
            marginLeft: responsiveWidth(3),
            fontFamily: 'Arial-BoldMT',
          }}>
          {errors}
        </Text>
      );
    }
    return <View />;
  };

  render() {
    const {
      errors,
      onChangeFunction,
      placeholderValue,
      secureTextentry,
    } = this.props;

    return (
      <View>
        <TextInput
          style={styles.inputStyle}
          onChangeText={onChangeFunction}
          placeholder={placeholderValue}
          selectionColor="white"
          placeholderTextColor="white"
          secureTextEntry={secureTextentry}
        />
        {this.hideError(errors)}
      </View>
    );
  }
}
