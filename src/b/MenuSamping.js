import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files
//import AppStackNavigator from './AppStackNavigator'
import SettingsScreen from './SettingsScreen';
//import HomeScreen from './HomeScreen';
import BemFtk from './BemFtk';
//import InputScreen from './bemftk/InputScreen';

export default class MenuSamping extends Component {

  render() {
    return (
      <MyApp />
    )
  }
}
const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>

      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);



const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: BemFtk,
  },
  Settings: {
    screen: SettingsScreen
  }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },


})
