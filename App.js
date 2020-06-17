import React from 'react';
import Constants from 'expo'
import { StyleSheet, Text, View, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Weather from "./components/weather";
var date = new Date();
console.log(date) 
export default class App extends React.Component {  

  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }
  fetchWeather(lat = 72 , lon = 113) {   
    fetch(      
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=62d65b3767c93611df20610d5628ff2b&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          lat: json.coord.lat,
          lon: json.coord.lon,
          icon:json.weather[0].icon,          
          temperature: json.main.temp.toFixed(0),
          weatherCondition: json.weather[0].main,
          weatherFor:json.weather[0].description,
          isLoading: false,
          
        });
      });
  }
  render() {
    const { isLoading,temperature, weatherCondition, weatherFor,lat,lon,icon} = this.state;    
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Weather temperature={temperature} weather={weatherCondition} forcast={weatherFor} lat={lat} lon={lon} icon = {icon}  />}
      </View>
      
    ); 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  date: {
    flex: 1,
    backgroundColor: '#fff'
  },
  
});