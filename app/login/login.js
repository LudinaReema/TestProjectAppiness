import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  userNameAction,
  passwordAction,
  clearValidation,
  clearLoginDataOnBackPress,
  validationCheck,
  clearValidationError,
} from '../action';
import {connect} from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import TextField from '../components/textField';
import {
  SUBMIT,
  LOGIN,
  USER_NAME_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  WRONG_CREDENTIALS,
} from '../strings';
import Toast from 'react-native-simple-toast';

const userData = {
  username: 'hruday@gmail.com',
  password: 'hruday123',
};

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  loginText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(3),
    fontFamily: 'Arial-BoldMT',
  },
  headerView: {
    paddingVertical: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    marginHorizontal: responsiveWidth(10),
    marginTop: responsiveHeight(18),
  },
  buttonText: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial-BoldMT',
  },
  buttonView: {
    marginVertical: responsiveHeight(2),
    backgroundColor: '#3d0764',
    borderRadius: 5,
    paddingVertical: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(80),
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.clearValidation();
    this.props.validationCheck(this.props.LoginData);
  }

  onSuccessLogin() {
    this.props.clearValidationError();
    if (
      this.props.LoginData.username.toUpperCase() ===
        userData.username.toUpperCase() &&
      this.props.LoginData.password === userData.password
    ) {
      this.props.navigation.navigate('EmployeeDetails');
    } else {
      Toast.show(WRONG_CREDENTIALS);
    }
  }
  onChangeUserName(username) {
    this.props.userNameAction(username);
  }

  onChangePassword(password) {
    this.props.passwordAction(password);
  }

  componentWillUnmount() {
    this.props.clearLoginDataOnBackPress();
  }

  render() {
    const {
      loginText,
      headerView,
      textInputView,
      buttonText,
      buttonView,
    } = styles;
    const loginError = this.props.errors;
    if (this.props.isErrorAvailable === false) {
      this.onSuccessLogin();
    }
    return (
      <ImageBackground
        style={styles.imageContainer}
        source={require('../assets/images/backgroundImage.jpg')}>
        <View style={headerView}>
          <Text style={loginText}>{LOGIN}</Text>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={textInputView}>
            <TextField
              onChangeFunction={this.onChangeUserName}
              placeholderValue={USER_NAME_PLACEHOLDER}
              errors={loginError.name}
            />
            <TextField
              onChangeFunction={this.onChangePassword}
              placeholderValue={PASSWORD_PLACEHOLDER}
              secureTextentry
              errors={loginError.password}
            />
            <TouchableOpacity style={buttonView} onPress={this.onSubmit}>
              <Text style={buttonText}>{SUBMIT}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mappStateToProps(state) {
  return {
    LoginData: state.login,
    errors: state.validation.errors,
    isErrorAvailable: state.validation.isErrorAvailable,
  };
}

export default connect(
  mappStateToProps,
  {
    userNameAction,
    passwordAction,
    clearValidation,
    clearLoginDataOnBackPress,
    validationCheck,
    clearValidationError,
  },
)(LoginPage);
