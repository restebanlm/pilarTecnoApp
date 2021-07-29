import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Tabs from './Tabs';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AppStack = props => {
  let islogged = false;
  let isLoadingApp = false;
  try {
    islogged = await AsyncStorage.getItem('islogged');
    if (islogged !== null) {
      // We have data!!
      console.log('sesion: ' + islogged);
    }
  } catch (error) {
    // Error retrieving data
  }

  return (
    <Stack.Navigator headerMode="none">
      {islogged ? (
        <Stack.Screen name="AppStack" component={Tabs} />
      ) : (
        <Stack.Screen name="LogIn" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
