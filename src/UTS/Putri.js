import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) =>
     ({
      headerTitle: '  DATA MAHASISWA PTI UNDIKSHA',
    });

  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Image
              source={require('./img/img1.jpg')}
              style={{ width: 600, height: 280, margin:3 }}
          />
        </View>


        <View style={styles.box2}>
          <View style={styles.BoxButton}>
            <View style={styles.ButtonBox}>
              <Button
                title="Data Mahasiswa Semester 2"
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    otherParam: 'Data Mahasiswa Semester 2',
                  });
                }}
              />
          </View>

            <View style={styles.ButtonBox}>
              <Button
                title="Data Mahasiswa Kelas Semester 4"
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    otherParam: 'Data Mahasiswa Semester 4',
                  });
                }}
              />
            </View>

        </View>


      <View style={styles.BoxButton}>
          <View style={styles.ButtonBox}>
              <Button
                title="Data Mahasiswa Semester 6"
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    otherParam: 'Data Mahasiswa Semester 6',
                  });
                }}
              />
          </View>

          <View style={styles.ButtonBox}>
              <Button
                title="Data Mahasiswa Semester 8"
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    otherParam: 'Data Mahasiswa Semester 8',
                  });
                }}
              />
          </View>
      </View>

     </View>

    <View style={styles.footer1}>
      <View style={styles.footer}>
        <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Progres UTS tahap 1</Text>
      </View>
    </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DETAIL SCREEN</Text>
        <Text>INDEX: {JSON.stringify(otherParam)}</Text>
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
//Ini Style
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2196F3',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    backgroundColor: '#FFFFFF',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center'
  },
  box2: {
    backgroundColor: '#2196F3',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  BoxButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // margin: 3,
    backgroundColor: '#2196F3'
  },
  footer1: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 3,
    backgroundColor: '#FFFFFF'
  },
  ButtonBox: {
    backgroundColor: '#00ADFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 3,
    backgroundColor: '#FFFFFF'
  }
});
