import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
import VolumeBalok from './src/serahcai/VolumeBalok';

export default class AppBalok extends Component {
  render(){
    return (
      <View style={styles.containerMain}>
        <VolumeBalok/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      containerMain: {
        flex: 1,
      }
    });
