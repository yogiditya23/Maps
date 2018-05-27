import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image
} from "react-native";
import { Container, Left, Content, Body, ListItem, Text, Icon, Card, CardItem, Thumbnail, Button } from 'native-base';
import CustomHeader from './CustomHeader';


export default class DynamicListExample extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: "About",
      headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 8 }} onPress={() => navigation.navigate('DrawerOpen')} />,
      drawerIcon:
          <Image
              source={require('../img/User.png')}
              style={[styles.icon]}
          />

  })
  render() {
    return (

      <Container>
      <CustomHeader
          title="Author"
          drawerOpen ={() => this.props.navigation.navigate("DrawerOpen")} />

      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../img/User.png')} />
              <Body>
                <Text>Aplikasi Bem FTK</Text>
                <Text note>Copyright@yogiditya</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
            <Image source={require('../img/gue.jpg')} style={{height: 200, width: 320, flex: 1}}/>
              <Text style={styles.title}>
                Aplikasi ini dirancangan untuk memenuhi kebutuhan dari salah satu Organisasi kemahasiswaan di Universitas
                Pendidikan Ganesha yaitu Bem Fakultas Teknik dan Kejuruan. Pengembang sendiri yaitu bernama Kadek Teguh Yogi Aditya, mahasiswa
                jurusan Pendidikan Teknik Informatika Semester 6
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    title: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }
});
