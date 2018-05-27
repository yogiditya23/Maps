import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, Icon, Image
} from 'react-native';
import { Container, Content, Header, Body } from 'native-base'
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import IS from './IS';
import Author from './Author';
import Map from './Map';

export default class CobaDrawer extends React.Component {

    render() {
      return (

        <Drawer />


      );
    }
  }
const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
         source={require('../img/bemicon.png')}
        />
          <Text style={styles.title}> App BemFtk </Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const Drawer = DrawerNavigator({
  Home: { screen: IS },
   Author: { screen: Author },

  Map: { screen: Map }
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
      backgroundColor: 'white',
      paddingLeft: 30


    },
    drawerImage: {
      height: 150,
      width: 150,
      borderRadius: 75,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 28
    }

  });
