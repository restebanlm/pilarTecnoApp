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
import {ProfileStackScreen} from '../routs/ProfileStack';
import Profile from '../screens/Profile';
import {createStackNavigator} from '@react-navigation/stack';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  _onHomePress = () => {
    Alert.alert('Hola', 'Ya te encuentras en Inicio.', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{height}}
          source={require('../assets/images/background.jpg')}>
          <View
            style={{flexDirection: 'column', height, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this._onHomePress()}
                style={[
                  styles.button,
                  {backgroundColor: 'rgba(127, 127, 127, 0.6)'},
                ]}>
                <Text style={styles.text}>INICIO</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Perfil')}
                style={[
                  styles.button,
                  {backgroundColor: 'rgba(127, 127, 127, 0.6)'},
                ]}>
                <Text style={styles.text}>PERFIL</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Publicaciones')}
                style={[
                  styles.button,
                  {backgroundColor: 'rgba(127, 127, 127, 0.6)'},
                ]}>
                <Text style={styles.text}>POSTS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Mapa')}
                style={[
                  styles.button,
                  {backgroundColor: 'rgba(127, 127, 127, 0.6)'},
                ]}>
                <Text style={styles.text}>MAPA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 35,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1,
  },
});
