import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'
//import PerkiraanCuaca from './src/Cuaca/PerkiraanCuaca';
//import Header from './src/UTS/Header';
import Footer from './src/UTS/Footer';
//import Weather from './src/Cuaca2/Weather';
//import HomeScreen from './src/UTS/HomeScreen';
import BemFtk from './src/UTS/BemFtk';

const navigation = DrawerNavigator({

  Header: {
    screen: Header
  },
  Footer: {
    screen: Footer
  }
})
export default navigation
