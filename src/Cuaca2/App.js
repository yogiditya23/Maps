import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
//import PerkiraanCuaca from './src/Cuaca/PerkiraanCuaca';
import Header from './src/Cuaca2/Header';
import Footer from './src/Cuaca2/Footer';
import Weather from './src/Cuaca2/Weather';
//import

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Header headerText="Header" />
        <Weather />
        <Footer footerText="Footer" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#E8EAF6'
  }
});
