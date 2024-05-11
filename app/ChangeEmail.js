import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export class ChangeEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      password: '',
    };
  }

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSaveChanges = () => {
    console.log('New Email:', this.state.newEmail);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>New Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.handleChangeText('newEmail', text)}
            value={this.state.newEmail}
            placeholder="Enter new email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
       
          <Text>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.handleChangeText('password', text)}
            value={this.state.password}
            placeholder="Enter password"
            secureTextEntry={true}
          />
         </View>
        <TouchableOpacity style={styles.button} onPress={this.handleSaveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'end',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 20,
  },
  inputContainer: {
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#40BFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ChangeEmail;
