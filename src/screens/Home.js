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

class Home extends React.Component {
  _onHomePress = () => {
    Alert.alert('Hola', 'Ya te encuentras ahí', [
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
                style={[styles.button]}>
                <Text style={styles.text}>PRINCIPAL</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.text}>PERFIL</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.text}>POSTEOS</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.text}>MAPAS</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    margin: width / 20,
    height: width / 5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'rgba(64, 37, 38, 0.8)',
    zIndex: 1,
  },
});

export default Home;
