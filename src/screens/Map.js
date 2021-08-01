import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {Image, Icon, Switch} from 'react-native-elements';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {
  hasLocationPermission,
  hasLocationPermissionIOS,
} from '../helpers/LocationPermission';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ASPECT_RATIO = width / height;
const LATITUDE = -59.45021;
const LONGITUDE = -66.86045;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      mapType: false,
    };
  }

  onRegionChange = region => {
    this.setState({
      ...this.state,
      region,
    });
  };

  componentDidMount = async () => {
    await hasLocationPermission();
    this._getLocation();
  };

  _getLocation = async () => {
    await Geolocation.getCurrentPosition(
      async posicion => {
        const longitude = posicion.coords.longitude;
        const latitude = posicion.coords.latitude;
        this.mapRef.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.longitudeDelta,
          },
          1000,
        );
        this.setState({
          ...this.state,
          region: {...this.state.region, longitude, latitude},
        });
        console.log(
          'posicion actual... Latitud: ' +
            `${JSON.stringify(longitude)}` +
            'latitud: ' +
            `${JSON.stringify(latitude)}`,
        );
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      },
    );
  };

  async fitCoordinates() {
    console.log('centrando mapa');
    this._getLocation();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <MapView
          ref={map => {
            this.mapRef = map;
          }}
          provider={PROVIDER_GOOGLE}
          mapType={this.state.mapType ? 'hybrid' : 'standard'}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
        />
        <Switch
          styles={styles.switch}
          trackColor={{false: '#767577', true: '#8d2d84'}}
          thumbColor={this.state.maptype ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            this.setState({
              ...this.state,
              mapType: !this.state.mapType,
            })
          }
          value={this.state.mapType}
        />
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 100,
            width: width / 10,
            alignSelf: 'flex-end',
            margin: 30,
            marginRight: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="crosshairs"
            type="font-awesome"
            color="#8d2d84"
            size={width / 10}
            onPress={() => this.fitCoordinates()}
          />
        </View>
        <View style={styles.markerFixed}>
          <Image
            style={styles.marker}
            source={require('../assets/images/pin.png')}
          />
        </View>
        <SafeAreaView style={styles.footer}>
          <Text style={styles.region}>
            longitud:
            {JSON.stringify(this.state.region.longitude)}
            {'\n'}latitud:
            {JSON.stringify(this.state.region.latitude)}
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 5,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
    alignSelf: 'center',
  },
  switch: {
    color: '#8d2d84',
    position: 'absolute',
  },
});
