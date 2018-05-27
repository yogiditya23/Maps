import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, SectionList, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
        static navigationOptions = {
          title: 'Jadwal Kelas',
        };
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box2}>
          <Text style={styles.text2}>Selamat Datang </Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.box31}>
            <View style={styles.box312}>
                <Button
                  title="Kelas"
                  onPress={() => {
                  this.props.navigation.navigate('Kelas');
                }}/>
            </View>

            <View style={styles.box312}>
                  <Button
                  title="Ruangan"
                  onPress={() => {
                  this.props.navigation.navigate('Ruangan');
                  }}/>
            </View>
          </View>

          <View style={styles.box31}>
            <View style={styles.box312}>
                  <Button
                  title="Hari"
                  onPress={() => {
                  this.props.navigation.navigate('Hari');
                  }}/>
            </View>
            <View style={styles.box312}>
                  <Button
                  title="Dosen"
                  onPress={() => {
                  this.props.navigation.navigate('Dosen');
                  }}/>
            </View>
          </View>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
  }
}

class Kelas extends Component {
      static navigationOptions = {
      title: 'Kelas',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Kelas</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
          </View>
      </View>
    );
  }
}

class Ruangan extends Component {
      static navigationOptions = {
      title: 'Ruangan',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Ruangan</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
          </View>
      </View>
    );
  }
}

class Hari extends Component {
      static navigationOptions = {
      title: 'Hari',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Hari</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
          </View>
      </View>
    );
  }
}

class Dosen extends Component {
      static navigationOptions = {
      title: 'Dosen',
      };
  render() {
    return (
        <View style={styles.containerMain}>
          <View style={styles.box5}>
            <Text>Dosen</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
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
    Kelas: {
      screen: Kelas,
    },
    Ruangan: {
      screen: Ruangan,
    },
    Hari: {
      screen: Hari,
    },
    Dosen: {
      screen: Dosen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {

        backgroundColor: '#F64747',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
    containerMain: {
    flex: 1,
    backgroundColor: '#F62459',
    flexDirection: 'column'
    },

    box1: {
    flex: 2,
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    },

    box2: {
    flex: 4,
    backgroundColor: '#EC644B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box3: {
    flex: 4,
    backgroundColor: '#84FFFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box4: {
    flex: 1,
    backgroundColor: '#F64747',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box5: {
    flex: 6,
    backgroundColor: '#EF4836',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    box31: {
    flex: 1,
    backgroundColor: '#F03434',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
    },

    box312: {
    flex: 4,
    backgroundColor: '#F1A9A0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,

    },

    text1: {
    fontSize: 30,
    fontWeight: 'bold',
    },

    text2: {
    fontSize: 30,
    },

    text3: {
    fontSize: 10,
    },
    });
