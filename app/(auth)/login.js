import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, Pressable, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';


export class Login extends Component {
  render() {
    return (

      <View style={styles.container}>


        <Image source={require("../../assets/images/logo.png")} style={styles.logo} /> 
        
        
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
          />
        </View>
   
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />
        </View>
   

        <Pressable onPress={this.handleLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
        

        <View style={styles.linecontainer}>
        <View style={styles.ortext}></View>
        <Text>or</Text>
        <View style={styles.ortext}></View>
        </View>
        <Text style={styles.signupLinkText}>Don't have an account? </Text>
        <Link href={"/signup"} style={styles.signupLinkText}>Sign Up
        </Link>

        </View>
       
    );
  }

  handleLogin = () => {
    // Logic for handling login
    console.log("Login button pressed");
    // You can add your logic here for login authentication
  };
}

const styles = StyleSheet.create({
  linecontainer:{
    width: '30%',
    marginTop: 15 ,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10, 
    width: '80%', 
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 5,
    color: 'black',
    width: '100%', 
  },
  icon: {
    marginRight: 10,
    marginLeft : 10,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  ortext: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.2,
    marginTop: 10,
  },
});

export default Login;
