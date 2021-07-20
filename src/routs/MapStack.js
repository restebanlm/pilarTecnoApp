import React, {Component} from 'react';
import Map from '../screens/Map';
import {createStackNavigator} from '@react-navigation/stack';

const MapStack = createStackNavigator();

export const MapStackScreen = () => {
  return (
    <MapStack.Navigator headerMode="none">
      <MapStack.Screen name="Mapa" component={Map} />
    </MapStack.Navigator>
  );
};
