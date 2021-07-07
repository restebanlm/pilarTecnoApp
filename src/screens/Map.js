import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Map extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{height}}
          source={require('../assets/images/background.jpg')}>
          <View
            style={{
              height: '100%',
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>MAPA</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Map;
