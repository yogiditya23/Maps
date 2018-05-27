import React from 'react';
import { Button, View, Text, StyleSheet, SectionList, AppRegistry, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    kota: ''
  };
}
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.Box1}>
          <Text style={styles.Texthead}>Dashboard</Text>
        </View>
        <View style={styles.Box2}>
        <Image style= {styles.img}source={require ('../img/img1.jpg')}/>
        </View>
        <View style={styles.Box3}>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
              </View>
              <View style={styles.Box3c}>
                <Text style={styles.Texthead2}>Baju</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
              </View>
              <View style={styles.Box3c}>
                <Text style={styles.Texthead2}>Celana</Text>
              </View>
            </View>

          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
              </View>
              <View style={styles.Box3c}>
                <Text style={styles.Texthead2}>Tas</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
              </View>
              <View style={styles.Box3c}>
                <Text style={styles.Texthead2}>Jaket</Text>
              </View>
            </View>

          </View>
        </View>
        <View style={styles.Box4}>
          <Text style={styles.Texthead}>Undiksha 2018</Text>
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

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E0E0E0',
    flex: 1,
    flexDirection: 'column'
  },
  Box1: {
    flex: 1.5,
    backgroundColor: '#212121',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Box2: {
    flex: 4,
    backgroundColor: 'grey',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  Box3: {
    flex: 7,
    backgroundColor: '#E0E0E0',
    marginTop: 20,
    marginBottom: 20,

  },
  Box3a: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
  },
  Box3b: {
    flex: 1,
    backgroundColor: '#424242',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  Box3c: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#424242',
  },
  Box4: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Texthead: {
    fontSize: 23,
    color: 'white'
  },
  Texthead2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  img: {
    height: 225,
    width: 440,
    alignItems: 'center'
  }
});
