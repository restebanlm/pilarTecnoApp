import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeStackScreen} from './HomeStack';
import {ProfileStackScreen} from './ProfileStack';
import {MapStackScreen} from './MapStack';
import {PostsStackScreen} from './PostsStack';
import {Icon} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUser,
  faMarker,
  faMap,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createMaterialBottomTabNavigator();
export const Tabs = () => {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#fff'}}
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
            <FontAwesomeIcon
              icon={faHome}
              type="font-awesome-5"
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
            <FontAwesomeIcon
              icon={faUser}
              type="font-awesome-5"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Publicaciones"
        component={PostsStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon
              icon={faMarker}
              type="font-awesome-5"
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
            <FontAwesomeIcon icon={faMap} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
