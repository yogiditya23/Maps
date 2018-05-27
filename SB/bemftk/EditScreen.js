import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class EditStudentRecordActivity extends React.Component {

  constructor(props) {

       super(props)

       this.state = {

         Id: '',
         Nama: '',
         NIM: '',
         Jurusan: '',
         Jabatan: '',

       }

     }

     componentDidMount(){

      // Received Student Details Sent From Previous Activity and Set Into State.
      /*this.setState({
        TextInput_Student_ID : this.props.navigation.state.params.ID,
        TextInput_Student_Name: this.props.navigation.state.params.NAME,
        TextInput_Student_Class: this.props.navigation.state.params.CLASS,
        TextInput_Student_PhoneNumber: this.props.navigation.state.params.PHONE_NUMBER,
        TextInput_Student_Email: this.props.navigation.state.params.EMAIL,
      })
      */

     }

    static navigationOptions =
    {
       title: 'EditStudentRecordActivity',
    };

    UpdateStudentRecord = () =>{

            fetch('http://api.ifreethink.net/1515051020/deleteapi.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({

            Id : this.state.Id,

            Nama: this.state.Nama,

              NIM : this.state.NIM,

              Jurusan : this.state.Jurusan,

            Jabatan: this.state.Jabatan

            })

            }).then((response) => response.json())
                .then((responseJson) => {

                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);

                }).catch((error) => {
                  console.error(error);
                });

      }


    DeleteStudentRecord = () =>{

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

          this.props.navigation.navigate('First');

      }

    render() {

      return (

   <View style={styles.MainContainer}>

          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Student Record Form </Text>

          <TextInput

            placeholder="Student Name Shows Here"

            value={this.state.TextInput_Student_Name}

            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Name : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

         <TextInput

            placeholder="Student Class Shows Here"

            value={this.state.TextInput_Student_Class}

            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Class : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

         <TextInput

            placeholder="Student Phone Number Shows Here"

            value={this.state.TextInput_Student_PhoneNumber}

            onChangeText={ TextInputValue => this.setState({ TextInput_Student_PhoneNumber : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

          <TextInput

            placeholder="Student Email Shows Here"

            value={this.state.TextInput_Student_Email}

            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >

            <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>

         </TouchableOpacity>

         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >

            <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>

         </TouchableOpacity>


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
