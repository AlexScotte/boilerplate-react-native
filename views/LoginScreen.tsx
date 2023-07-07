import React, { useState  } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../navigation/AuthContext';
import { login } from '../services/api';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, loginSuccess } = useAuth();

  const handleLogin = async() => {
    try {
        // const data = await login(username, password);
         console.log('Logged in successfully', "data");
        loginSuccess();

      } catch (error: unknown) {
        console.log('Error logging in', error);
  
        // Check if error is an instance of Error
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
  
        Alert.alert('Login Error', errorMessage); 
      }
  };

  return (
      <View colors={['#E0EAFC', '#CFDEF3']} style={styles.container}>
        
        <Image
          style={styles.logo}
          source={{uri: 'https://your-logo-url'}}
        />

        <View style={styles.top}>

          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            placeholder="Email"
            autoCapitalize="none"
            />
            
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPressOut={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={{flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity style={styles.link}>
              <Text >Don't have an account ? </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
       </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 0,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 50,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#02e002',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  linkText: {
    color: '#02e002',
    fontSize: 14,
  },
  top: {
    flex: 0.5,
    backgroundColor: 'white',
    padding:30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default LoginScreen;