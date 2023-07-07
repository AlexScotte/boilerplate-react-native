import { Alert, Button, SafeAreaView, StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SummaryScreen from './SummaryScreen';
import InformationsScreen from './InformationsScreen';
import ActivityScreen from './ActivityScreen';
import GroupsScreen from './GroupsScreen';
import PlanningScreen from './PlanningScreen';

const Tab = createBottomTabNavigator();

const OrganizationScreen = ({ navigation  }) => {

    return (

    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Informations" component={InformationsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Groups" component={GroupsScreen} />
      <Tab.Screen name="Planning" component={PlanningScreen} />
    </Tab.Navigator>
    );
  }

export default OrganizationScreen;
