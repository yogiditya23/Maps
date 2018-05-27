import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions, Alert } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');
const sunIcon = require('./img/sunrise.png');
const groundIcon = require('./img/ground.png');
const presIcon = require('./img/pressure.png');
const humIcon = require('./img/humidity.png');

//import Loader from './loading/Loader';

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        //loading: false,
      }
    };
  }
  async getWeather() {
  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=8f3a004af8aa43d2716a0faca1222bea&units=metric'
    );
    let responseJson = await response.json();

    if (responseJson.cod === 200) {
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } else {
    const warning = 'maaf kota ' + this.state.city + ' tidak di temukan';
    Alert.alert('warning');
  }
} catch (error) {
    console.error(error);
  }
}


  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box2}>

      <Text style={{ textAlign: 'center', paddingTop: 15, paddingBottom: 15, width: 200, fontSize: 20 }}>
          Masukan Nama Kota </Text>
          <TextInput
                style={{ textAlign: 'center', height: 40, color: 'white', padding: 10, margin: 15, width: 200 }}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
          />

            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="red"

              accessibilityLabel="Klik untuk melihat cuaca"
            />

      </View>

      <View style={styles.box4}>
        <View style={styles.button}>
          <Text> City : { this.state.city} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={tempIcon} style={styles.icon} />
       </View>
          <Text> Temp : { this.state.forecast.temp} {'celcius'} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={windIcon} style={styles.icon} />
       </View>
          <Text> Wind Speed : { this.state.forecast.speed} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Cuaca : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Desc : { this.state.forecast.description} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={sunIcon} style={styles.icon} />
       </View>
          <Text> Sunrise : { this.state.forecast.sunrise} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={sunIcon} style={styles.icon} />
       </View>
          <Text> Sunset : { this.state.forecast.sunset} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={presIcon} style={styles.icon} />
       </View>
          <Text> Tk.Udara : { this.state.forecast.pressure} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={humIcon} style={styles.icon} />
       </View>
          <Text> Humidity : { this.state.forecast.humidity} </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Sea Level : { this.state.forecast.sea_level} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={groundIcon} style={styles.icon} />
       </View>
          <Text> Ground Level : { this.state.forecast.grnd_level} </Text>
        </View>
      </View>


</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFCC80',
    flex: 1,
    flexDirection: 'column'
  },
 inputan: {
      backgroundColor: '#FFFFF0',
      flex: 1.5,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  box1: {
    flex: 0.7,
    backgroundColor: '#FF9900',
  },
  box2: {
    flex: 0.4,
    backgroundColor: '#FF9800',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 0.5,
    backgroundColor: '#FFB74D',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 0.3,
    backgroundColor: '#FFA726',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#FFA726',
    margin: 10
  },
  button: {
    width: 200,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFD180',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#FFD740',
    borderColor: '#FFC400',
    borderWidth: 1,
    justifyContent: 'center',
    height: 60,
    width: 40,
  },
  icon: {
    tintColor: '#fff',
    height: 20,
    width: 20,
  }
});
