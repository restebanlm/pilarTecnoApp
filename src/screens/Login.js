import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';
// import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from 'react-native';
import {connect} from 'react-redux';
import actions from '../store/actions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

GoogleSignin.configure({
  webClientId:
    '969846108035-mp20i2ss3vumb9qbsepif8nk7jga88o1.apps.googleusercontent.com',
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar style={{backgroundColor: 'green'}} />
        <View style={styles.content}>
          <ImageBackground
            style={styles.backImagen}
            source={require('../assets/images/background.jpg')}>
            <View>
              <Text style={styles.text}>Ingresa con ...</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Button
                style={styles.button}
                title="Continuar con Google..."
                onPress={() =>
                  this.onGoogleButtonPress().then(async () => {
                    console.log('Signed in with Google!');
                    if(data){
                      console.log('Login: ' + JSON.stringify(data.user));
                      try {
                        await AsyncStorage.setItem('islogged', true);
                      } catch (error) {
                        console.log('Hubo un error: ' + error);
                      }
                      this.props.setUser(data.user);
                    }
                    
                  })
                }
              />
              <Button style={styles.button} title="Continuar con ---..." />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  backImagen: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    margin: width / 20,
    borderRadius: 15,
    width: width / 1.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

const mapDispatchToProps = dispatch => ({
  setUser: data => dispatch(action.user.setUser(data)),
});

const mapStateToProps = state => ({
  user: state.data.user,
});

export default connect(mapDispatchToProps, mapStateToProps)((Login))