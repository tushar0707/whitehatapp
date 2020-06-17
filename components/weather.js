import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = ({ weather, temperature,forcast,lat,lon,icon }) => {
  icon = "01n" ? "weather-sunny" : "50d";
  icon = "02d" ? "weather-cloudy" : "50d";
  icon = "50d" ? "weather-sunset" : "50d";
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name= {icon} color={'#EB0707'} />
        <Text style={styles.tempText}>{temperature} °c</Text>
        <Text style={styles.latText}>Latitude :{lat}, Longitude: {lon} </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weather} </Text>
        <Text style={styles.subtitle}>{forcast}</Text>
      </View>
      <View style={styles.endContainer}>
        <Text style={styles.made}><small>Made by Tushar</small></Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#010300'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  endContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#EB0707'
  },
  lonText: {
    fontSize: 20,
    color: '#EB0707'
  },
  latText: {
    fontSize: 20,
    color: '#EB0707'
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#EB0707'
  },
  made: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    color: '#EB0707'
  },
  subtitle: {
    fontSize: 24,
    color: '#EB0707'
  }
});
export default Weather;