import React from 'react';
import {Button, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

//import coba from './src/menu/coba'

class Menu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text>Anggota HMJ</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Menu />,
  };
constructor(props) {
    super(props);
    this.state = {
      nama: '',
    };
  }
  render() {
    return (
       <View style={styles.containerMain}>

          <View style={styles.box2}>
          <View style={{alignItems: 'center', justifyContent: 'center', margin: 10, padding:5, backgroundColor:'white'}}>
           <Image
        //source={require ('./img/user.png')}
        style={{width: 100, height: 100 }}
      />

      <Text>Masukan Nama</Text>

        <TextInput
              style={{ height: 40, width: 250 }}
              onChangeText={(nama) => this.setState({ nama })}
              placeholder="Masukkan Nama"
             />

             <View style={{ flexDirection: 'row', margin: 5 }}>
      <Button
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Detail', {
              nama: this.state.nama,
            });
          }}

          title="Detail Anggota HMJ"
          color="#00CED1"

        />
        </View>

        <View style={{ flexDirection: 'row', margin: 5 }}>
        <Button

              title="Input Anggota HMJ"
              color="#ADD8E6"
              onPress={() => this.props.navigation.navigate('Input')}
        />

        </View>
          </View>
    </View>

      </View>
    );
  }
}

class InputScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Menu />,
  };
constructor(props) {
    super(props);
    this.state = { nama: '', };
    this.state = { nim: '', };
    this.state = { jabatan: '', };
  }
render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box2}>

           <View style={{marginTop:10, margin: 10, padding:10, backgroundColor: 'white'}}>
              <View style={{ margin: 2, padding: 1, alignItems: 'center' }}>
                  <Text>Masukan Nama</Text>
                      <TextInput
              style={{ height: 40, width: 250 }}
              onChangeText={(nama) => this.setState({ nama })}
              placeholder="Masukkan Nama"
             />
        </View>

         <View style={{ margin: 5, padding: 1, alignItems: 'center' }}>
        <Text>Masukan NIM</Text>
        <TextInput
              style={{ height: 40, width: 250 }}
              onChangeText={(nim) => this.setState({ nim })}
              placeholder="Masukkan NIM"
             />
        </View>

         <View style={{ margin: 5, padding: 1, alignItems: 'center' }}>
        <Text>Masukan Jabatan</Text>
        <TextInput
              style={{ height: 40, width: 250 }}
              onChangeText={(jabatan) => this.setState({ jabatan })}
              placeholder="Masukkan Jabatan"
             />
        </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => {
            //* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Coba', {
              nama: this.state.nama,
              nim: this.state.nim,
              jabatan: this.state.jabatan,
            });
          }}

          title="Simpan "
          color="#00CED1"

        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>


          </View>
      </View>

    );
  }
}

 class CobaScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Menu />,
  };
  render() {
    const { params } = this.props.navigation.state;
    const nama = params ? params.nama : null;
    const nim = params ? params.nim : null;
    const jabatan = params ? params.jabatan : null;
  //const levelIcon = require('./img/user.png');
    return (
      <View style={styles.containerMain}>
          <View style={styles.box2}>

        <View style={{marginTop:10, margin: 10, padding:10, backgroundColor:'white'}}>
        <View style={styles.button}>
          <Image
              //source={require('./img/user.png')}
              style={{margin: 5, width: 50, height: 50 }}
           />

          <View style={styles.button1}>
          <Text> Nama: {JSON.stringify(nama)} </Text>
          </View>
          <View style={styles.button1}>
          <Text> NIM: {JSON.stringify(nim)} </Text>
          </View>
          <View style={styles.button1}>
          <Text> Jabatan: {JSON.stringify(jabatan)} </Text>
          </View>
       </View>
      </View>

          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Menu />,
  };
  render() {
    const { params } = this.props.navigation.state;
    const nama = params ? params.nama : null;
    return (
      <View style={styles.containerMain}>
          <View style={styles.box2}>
          <Image
            //  source={require('./img/user.png')}
              style={{margin: 5, width: 100, height: 100 }}
           />
        <View style={{margin: 5, width: 200, height: 50, justifyContent: 'flex-start', backgroundColor:'white' }}>
          <Text> Nama: {JSON.stringify(nama)} </Text>
        </View>

        <View style={{margin: 5, width: 200, height: 50, justifyContent: 'flex-start', backgroundColor:'white' }}>
          <Text> NIM: {JSON.stringify(nama)} </Text>
        </View>

        <View style={{margin: 5, width: 200, height: 50, justifyContent: 'flex-start', backgroundColor:'white' }}>
          <Text> Jabatan: {JSON.stringify(nama)} </Text>
        </View>

          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
          </View>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Input: {
      screen: InputScreen,
    },
    Detail: {
      screen: DetailsScreen,
    },
    Coba: {
      screen: CobaScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'darkturquoise',
  },
  box2: {
    flex: 2.5,
    backgroundColor: 'aqua',
     alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'aqua',
     alignItems: 'center',
  },
  box5: {
    flex: 0.5,
    backgroundColor: 'aqua',
     alignItems: 'flex-start',

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
  }
});
