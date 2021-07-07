import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Map from '../screens/Map';

const MapStack = createStackNavigator();

const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Mapa" component={Map} />
    </MapStack.Navigator>
  );
};

export default MapStackScreen;
