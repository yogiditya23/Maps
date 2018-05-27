import React, { Component } from 'react';
import { StyleSheet, TextInput, Image } from 'react-native';
import { Container, Content, Button, Text, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';



 export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.containerMain}>
       <Container >
       <Content>
       <Card style={{flex: 0}}>
         <CardItem>
           <Left>
             <Thumbnail source={require('../img/bemicon.png')} />
             <Body>
               <Text > BEM FTK </Text>

             </Body>
           </Left>
         </CardItem>
         <CardItem>
           <Body>
           <Image source={require('../img/bemgua.png')} style={{height: 200, width: 320, flex: 1}}/>
             <Text style={styles.title}>
               Bem Fakultas Teknik dan Kejurusan atau yang biasa disebut Bem FTK merupakan sebuah organisasi kemahasiswaan yang berada dilembaga Fakultas
               Teknik dan Kejuruan Universita Pendidikan Ganesha. Bem Ftk memiliki banyak program kerja yang tidak bisa dibahasa satu persatu. Oleh sebab itu diciptakannya
               sebuah aplikasi untuk memudahkan anggota Bem FTK dalam melakukan aktivitas keorganisasiannya.
             </Text>
           </Body>
         </CardItem>
       </Card>

         <Button block 
         onPress={() => this.props.navigation.navigate('Detail')}
         >
           <Text>Details</Text>
         </Button>
         <Button block success
         onPress={() => this.props.navigation.navigate('InputData')}
         >
           <Text>Input Data Anggota</Text>

         </Button>
         </Content>


      </Container>
</View>

    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'aqua',
    flex: 1,
    flexDirection: 'column'
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
  },
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
