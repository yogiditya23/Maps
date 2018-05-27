import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Expo from "expo";

import LoginForm from './SB/bemftk/LoginForm';


export default class App extends React.Component {
  async componentWillMount() {
     await Expo.Font.loadAsync({
       Roboto: require("native-base/Fonts/Roboto.ttf"),
       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
     });
     this.setState({ loading: false });
   }


  render() {
    return (
      <View style={styles.containerMain}>
      <LoginForm />


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
