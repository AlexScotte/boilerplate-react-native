import 'react-native-gesture-handler';
import './languages/i18n';

import React, {useState, useEffect} from 'react';

import { useAuth } from './navigation/AuthContext';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {
  const { isLoggedIn, loginSuccess, checkToken } = useAuth();
 
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>

      <NavigationContainer >
        {isLoggedIn   ? (
          <AppStack />
          ) : (
          <AuthStack/>
          )}
      </NavigationContainer>
    </>
  );
      }
export default App;
