import React from 'react';
import { Text, View, Icon } from 'react-native';
import { TabNavigator } from 'react-navigation';

import InputScreen from './InputScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

// Version can be specified in package.json

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Footer headerText="Header" />
        <HomeScreen />
      </View>
    );
  }
}
class Detail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DetailScreen />
      </View>
    );
  }
}

class InputData extends React.Component {
  render() {
    return (
    <InputScreen />
    );
  }
}

const Tab = TabNavigator({

  Home: { screen: HomeScreen },
  InputData: { screen: InputScreen },
  Detail: { screen: DetailScreen },
},

);


export default class CobaDrawer extends React.Component {

    render() {
      return (
        <Tab />
      );
    }
  }
