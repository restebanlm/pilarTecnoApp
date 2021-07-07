import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Perfil" component={Profile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
