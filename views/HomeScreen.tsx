import React, { useState } from 'react';
import { Button, View } from 'react-native';


const HomeScreen = ({navigation}) => {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Organization')}
          title="Go to organization"
        />
      </View>
    );
  };

export default HomeScreen;
