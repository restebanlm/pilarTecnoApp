import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
