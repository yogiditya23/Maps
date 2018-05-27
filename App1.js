import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasPersegiPanjang extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      luas:0,
      keliling:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Luas dan Keliling Persegi Panjang
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                luas: (this.state.panjang*this.state.lebar),
                keliling: ((parseInt(this.state.panjang) + parseInt(this.state.lebar)) * 2 )
              })}
              title="Hitung"
              color= "#4DD0E1"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#80CBC4'}}>
          <Text style = {{padding: 30, textAlign:'center', fontSize: 20}} >
              Panjang = {this.state.panjang} {"\n"}
              Lebar      = {this.state.lebar} {"\n"}
              Luas       = {this.state.luas} {"\n"}
              Keliling   = {this.state.keliling}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungLuasPersegiPanjang);
