import React from 'react';
import { Text, View, Icon } from 'react-native';
import { TabNavigator } from 'react-navigation';
import InputScreen from './bemftk/InputScreen';
import HomeScreen from './bemftk/HomeScreen';
import DetailScreen from './bemftk/DetailScreen';
import MenuSamping from './MenuSamping';
import Header from './Header';
import Footer from './Footer'; // Version can be specified in package.json

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

export default TabNavigator({
  Home: { screen: HomeScreen },
  InputData: { screen: InputData },
  Detail: { screen: DetailScreen },
});
