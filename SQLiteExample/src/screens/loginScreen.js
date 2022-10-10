import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import {connect} from 'react-redux';
import {createTable, createUserTable} from '../helper/db';
import {loginUser} from '../../store/actions/userAction';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  usernameChange(username) {
    this.setState({username});
  }
  passwordChange(password) {
    this.setState({password});
  }
  handleSubmit = () => {
    this.props.loginUser(this.state.username, this.state.password, () => {
      console.log('Login ' + this.props.login.isLoggedIn);
      if (this.props.login.isLoggedIn === true) {
        this.props.navigation.navigate('PrivatePage');
      } else {
        Alert.alert('Wrong credentials');
      }
    });
    //if (this.props.message)
  };
  //this.props.navigation.navigate('PrivatePage')


  componentDidMount() {
    createTable();
    createUserTable();
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Username</Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            placeholder="Enter your username"
            onChangeText={(text) => this.usernameChange(text)}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Password</Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            placeholder="Enter your password"
            onChangeText={(text) => this.passwordChange(text)}
            secureTextEntry={true}
          />
        </View>
        <CustomButton title="Login" onPress={() => this.handleSubmit()} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register_page')}>
          <Text>No account? Create one !!!</Text>
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
    user: state.users,
    login: state.login,
  };
};
export default connect(mapStateToProps, {loginUser})(LoginPage);
