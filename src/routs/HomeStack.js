import React, {Component} from 'react';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Inicio" component={Home} />
    </HomeStack.Navigator>
  );
};
