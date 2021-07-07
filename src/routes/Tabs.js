import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeStackScreen from './HomeStack';
import ProfileStackScreen from './ProfileStack';
import MapStackScreen from './MapStack';
import PostsStackScreen from './PostsStack';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f5c511',
        inactiveTintColor: 'red',
        labelStyle: {
          fontSize: 16,
          marginBottom: 3,
          fontWeight: 'bold',
        },
        adaptive: true,
      }}>
      <Tab.Screen
        name="Inicio"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name={'home'}
              type="simple-line-icon"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name={'user'}
              type="simple-line-icon"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostsStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name={'speech'}
              type="simple-line-icon"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name={'map'}
              type="simple-line-icon"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
