import React from 'react';
import {Button, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DetailScreen from './bemftk/DetailScreen';
import HomeScreen from './bemftk/HomeScreen';
import InputScreen from './bemftk/InputScreen';
//import Header from './Header';
import Footer from './Footer';

export default class BemFtk extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
      <Footer headerText="Header" />
        <BemFtkk />
        <Footer footerText="Footer" />
      </View>
    );
  }
}

class BemFtkk extends React.Component {

  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Input: {
      screen: InputScreen,
    },
    Detail: {
      screen: DetailScreen,
    },

  },
  {
    initialRouteName: 'Home',
  }
);


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'darkturquoise',
  },
  box2: {
    flex: 2.5,
    backgroundColor: 'aqua',
     alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'aqua',
     alignItems: 'center',
  },
  box5: {
    flex: 0.5,
    backgroundColor: 'aqua',
     alignItems: 'flex-start',

  },
  button: {
    width: 250,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  button1: {
    width: 250,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'pink',
    flexDirection: 'column'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: '#fff',
    height: 20,
    width: 20,
  }
});
