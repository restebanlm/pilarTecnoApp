import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {actions} from '../store';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
import user from '../store/reducers/user';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

GoogleSignin.configure({
  webClientId:
    '969846108035-mp20i2ss3vumb9qbsepif8nk7jga88o1.apps.googleusercontent.com',
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      photoURL: '',
      name: '',
      password: '',
    };
  }

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  render() {
    const {email, photoURL, name, password} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.content}>
          <ImageBackground
            style={{width, height}}
            source={require('../assets/images/background.jpg')}>
            <Text style={styles.text}> INICIAR SESIÓN </Text>
            <Input
              style={styles.input}
              placeholder="Correo electrónico"
              value={email}
              onChangeText={em => this.setState({email: em})}
            />

            <Input
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              value={password}
              onChangeText={psw => this.setState({password: psw})}
            />

            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: 'rgba(85, 77, 77, 0.8)'},
              ]}
              onPress={() => {
                email,
                  password
                    ? auth()
                        .signInWithEmailAndPassword(email, password)
                        .then(async data => {
                          console.log('Signed in with e-mail!');
                          if (data) {
                            console.log(
                              'res login: ' + JSON.stringify(data.user),
                            );
                            try {
                              await AsyncStorage.setItem(
                                'isloged',
                                JSON.stringify(data.user),
                              );
                            } catch (e) {
                              console.log('Hubo un error :' + e);
                            }
                            this.props.setUser(data.user);
                          }
                        })
                        .catch(err => {
                          console.log(err);
                        })
                    : Alert.alert('complete todos los campos');
              }}>
              <Text style={styles.text}>INGRESAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Create')}
              style={[
                styles.button,
                {backgroundColor: 'rgba(85, 77, 77, 0.8)'},
              ]}>
              <Text style={styles.text}>CREAR USUARIO</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              <GoogleSigninButton
                style={{width: 200, height: 50}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Ligth}
                onPress={() =>
                  this.onGoogleButtonPress()
                    .then(async data => {
                      console.log('Registrado con Google');
                      if (data) {
                        console.log('Login: ' + JSON.stringify(data.user));
                        try {
                          await AsyncStorage.setItem(
                            'isloged',
                            JSON.stringify(data.user),
                          );
                        } catch (e) {
                          console.log('Hubo un error:' + e);
                        }
                        this.props.setUser(data.user);
                      }
                    })
                    .catch(err => {
                      console.log('Errorazo: ' + err);
                    })
                }
              />
            </Text>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    backgroundColor: '#F4ECF7',
    margin: width / 20,
  },

  button: {
    margin: 10,
    marginLeft: 100,
    width: width / 2,
    height: height / 18,
    borderRadius: 9,
  },
});

const mapDispatchToProps = dispatch => ({
  setUser: data => dispatch(actions.user.setUser(data)),
});
const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
