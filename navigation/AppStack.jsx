import React from 'react';
import HomeScreen from '../views/HomeScreen';
import OrganizationScreen from '../views/Organization/OrganizationScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Organization" component={OrganizationScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
