import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomButton from '../components/customButton';
import {connect} from 'react-redux';
import {addUser} from '../../store/actions/userAction';
import uuid from 'react-native-uuid';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
);

class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      passwordConfirmError: ''
    }
  }

  usernameChange(username) {
    if (username.length < 3) {
      this.setState({username});
      this.usernameErrorChange('Full name must be at least 3 characters');
    } else {
      this.setState({username});
      this.usernameErrorChange(false);
    }
  }
  emailChange(email) {
    if (email.length <= 0 || !emailRegex.test(this.state.email)) {
      this.setState({email});
      this.emailErrorChange('Invalid email');
    } else {
      this.setState({email});
      this.emailErrorChange(false);
    }
  }
  passwordChange(password) {
    if (password.length < 3) {
      this.setState({password});
      this.passwordErrorChange('Password must containat least 3 characters');
    } else {
      this.setState({password});
      this.passwordErrorChange(false);
    }
  }
  passwordConfirmChange(passwordConfirm){
    if (this.state.password !== passwordConfirm) {
      this.setState({passwordConfirm});
      this.passwordConfirmErrorChange('Password must match');
    } else {
      this.setState({passwordConfirm});
      this.passwordConfirmErrorChange(false);
    }
  }
  usernameErrorChange = (text) => {
    this.setState({usernameError: text})
  }
  emailErrorChange = (text) => {
    this.setState({emailError: text})
  }
  passwordErrorChange = (text) => {
    this.setState({passwordError: text})
  }
  passwordConfirmErrorChange = (text) => {
    this.setState({passwordConfirmError: text})
  }

handleSubmit = () => {
  if (
    this.state.usernameError !== false ||
    this.state.emailError !== false ||
    this.state.passwordError !== false ||
    this.state.passwordConfirmError !== false ||
    this.state.username.length < 1 ||
    this.state.password.length < 1
  ) { Alert.alert('Something wrong');}
  else {
    console.log('test', uuid.v4());
    this.props.addUser(
      uuid.v4(),
      this.state.username,
      this.state.email,
      this.state.password, 
      () => {
        if (this.props.user.alert === 'Registration success') {
          Alert.alert(this.props.user.alert,'',
            [{
              text: "OK",
              onPress: () => this.props.navigation.navigate('Login_page')
            }] 
          );
        } else {
          Alert.alert(this.props.user.alert)
        }
      }
    );
    
  }
}
  render() {
    return (
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Username:</Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            placeholder="Enter your username"
            onChangeText={(text)=> this.usernameChange(text)}
            secureTextEntry={false}
          />
        </View>
        {
          this.state.usernameError ? (
            <View>
              <Text>Full name must be at least 3 characters</Text>
            </View>
          ) : null
        }
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Email:</Text>
          <TextInput
            style={styles.input}
            value={this.state.email}
            placeholder="Enter your email"
            onChangeText={(text) => this.emailChange(text)}
            secureTextEntry={false}
          />
        </View>
        {
          this.state.emailError ? (
            <View>
              <Text>Invalid email</Text>
            </View>
          ) : null
        }
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Password:</Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            placeholder="Enter your password"
            onChangeText={(text)=> this.passwordChange(text)}
            secureTextEntry={true}
          />
        </View>
        {
          this.state.passwordError ? (
            <View>
              <Text>{this.state.passwordError}</Text>
            </View>
          ) : null
        }
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Confirm password:</Text>
          <TextInput
            style={styles.input}
            value={this.state.passwordConfirm}
            placeholder="Confirm your password"
            onChangeText={(text) => this.passwordConfirmChange(text)}
            secureTextEntry={true}
          />
        </View>
        {
          this.state.passwordConfirmError ? (
            <View>
              <Text>{this.state.passwordConfirmError}</Text>
            </View>
          ) : null
        }
        <CustomButton
          title="Register"
          onPress={this.handleSubmit}
          disabled={false}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login_page')}>
          <Text>Already have an account? Sign in !!!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'column',
    height: 80,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {addUser})(RegistrationPage);
