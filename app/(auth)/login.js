import React, { useState,useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Pressable, Text,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { firebase } from "../../FireBaseConfig/firebaseConfig";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]=useState(false);
  useEffect(() => {
    checkLoggedInStatus(); 
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        // Navigate to Home if user is already logged in
      }
    } catch (error) {
      console.error('Error reading user token from AsyncStorage:', error);
  }
};
  const handleLogin = async (email,password) => {
    setLoading(true);
  
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password); 
      console.log("login suc"); 
      await AsyncStorage.setItem('userToken', response.user.uid);
      router.push("Home")
    } 
    catch (error) {
      alert('Sign up faild'+error.message)
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={email}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={password}
            autoCapitalize='none'
          autoCorrect={false}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Pressable onPress={()=>handleLogin(email,password)} style={styles.loginButton}>
      {loading ? (
          <ActivityIndicator size="small" color="white" /> 
        ) : (
          <Text style={styles.loginText}>Login</Text>
        )}
      </Pressable>
      <View style={styles.linecontainer}>
        <View style={styles.ortext}></View>
        <Text>or</Text>
        <View style={styles.ortext}></View>
      </View>
      <Text style={styles.signupLinkText}>Don't have an account? </Text>
      <Link href={"/signup"} style={styles.signupLinkText}>Sign Up</Link>
    </View>
  );
};

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