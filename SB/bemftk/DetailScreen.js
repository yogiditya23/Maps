import React, { Component } from 'react';
import { StyleSheet, View, Alert, Image, Text, Platform,
        TouchableOpacity, ListView, ActivityIndicator, refreshing } from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import { Container, Header, Content,  Icon, List,  Button, ListItem } from 'native-base';

export default class DetailScreen extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      Id: '',
      isLoading: true,
      refreshing: false,

    }
  }

  static navigationOptions =
  {
     title: 'Detail Anggota',
  };

  componentDidMount() {
    this.GetDataBem();
  }

  GetDataBem = () => {

       return fetch('http://api.ifreethink.net/1515051020/getapi.php')
         .then((response) => response.json())
         .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }



     GetData=(Id,Nama, NIM, Jurusan, Jabatan)=>{
          ({
            Id : Id,
            Nama: Nama,
            NIM: NIM,
          Jurusan: Jurusan,
            Jabatan: Jabatan
          });
     }

     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: .5,
             width: "100%",
             backgroundColor: "#000",
           }}
         />
       );
     };

     DeleteData = () => {

          fetch('http://api.ifreethink.net/1515051020/deleteapi.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Id: this.state.Id

          })
          }).then((response) => response.json())
          .then((responseJson) => {
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);

          }).catch((error) => {
             console.error(error);
          });

      }
     render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>

        );
      }

      return (
        refreshing: true,
        <View style={styles.MainContainer_For_Show_StudentList_Activity}>

          <ListView

            dataSource={this.state.dataSource}

            renderSeparator= {this.ListViewItemSeparator}

            renderRow={ (rowData) =>
              <ListItem>
              <Image
                  source={require('../img/people.png')}
                  style={[styles.icon]}
              />

              <TouchableOpacity onPress={this.DeleteData}>
              <Image
                style={styles.icon}
                source={require('../img/trash.png')}
              />
            </TouchableOpacity>

              <Text style={styles.title}
                      onPress={this.GetData.bind(
                        this, rowData.Id,
                         rowData.Nama,
                         rowData.NIM,
                         rowData.Jurusan,
                         rowData.Jabatan
                         )}
              >

                    Nama     : {rowData.Nama} {'\n'}
                    NIM        : {rowData.NIM} {'\n'}
                    Jurusan : {rowData.Jurusan} {'\n'}
                    Jabatan : {rowData.Jabatan}
                    </Text>


                    </ListItem>}

          />


        </View>
      );
    }

}

const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  container: {
  padding: 2,
  justifyContent: 'flex-start'
  },

  title: {
    color: '#2C3E50',
    marginTop: 10,
    justifyContent: 'flex-start',
    opacity: 0.9,
    fontSize: 16,
    paddingLeft: 15
  },

  icon: {
      height: 35,
      width: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
  },

  MainContainer_For_Show_StudentList_Activity :{

    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5

    },

  TextInputStyleClass: {

  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#FF5722',
  borderRadius: 5 ,

  },

  TouchableOpacityStyle: {

    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});
