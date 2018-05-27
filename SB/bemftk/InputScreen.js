import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Form, Button, Item, Input, Label, Picker, Icon, Title } from 'native-base';
import { View, Image, AppRegistry, TextInput, Alert } from 'react-native';
import EditScreen from './EditScreen';



export default class InputScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nama: '',
        nim: '',
        jabatan: '',
        jurusan: ''
      };
    }
      onValueChange(value: string) {
      this.setState({
        jurusan: value,
      });
    }
    onValueChange2(value: string) {
    this.setState({
      jabatan: value


    });
  }

   InputUsers = () => {
     const {nama} = this.state;
     const {nim} = this.state;
     const {jurusan} = this.state;
     const {jabatan} = this.state;


fetch('http://api.ifreethink.net/1515051020/insert.php', {
      method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({
          Nama: nama,
          NIM: nim,
          Jurusan: jurusan,
          Jabatan: jabatan
        })
      }).then((response) => response.json()).then((responseJsonFromServer) => {
            Alert.alert(responseJsonFromServer);
          }).catch((error) => {
            console.error(error);
          });
    }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(TextInputValue) => this.setState({ nama: TextInputValue })} />
            </Item>

            <Item floatingLabel>
              <Label>Nim</Label>
              <Input onChangeText={(TextInputValue) => this.setState({ nim: TextInputValue })}
              keyboardType='numeric'
              />
            </Item>
            <Label> Jurusan</Label>
            <Picker
              mode="dropdown"
              iosIcon={< Icon name="ios-arrow-down-outline" />}
              placeholder="Jurusan"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.jurusan}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Pendidikan Teknik Informatika" value="Pendidikan Teknik Informatika" />
              <Picker.Item label="Pendidikan Teknik Mesin" value="Pendidikan Teknik Mesin" />
              <Picker.Item label="Pendidikan Teknik Elektro" value="Pendidikan Teknik Elektro" />
              <Picker.Item label="Pendidikan Kesejahteraan Keluarga" value="Pendidikan Kesejahteraan Keluarga" />
              <Picker.Item label="Manajemen Informatika" value="Manajemen Informatika" />
            </Picker>
            <Label> Jabatan </Label>
            <Picker
              mode="dropdown"
              iosIcon={< Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.jabatan}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Departemen Minat dan Bakat" value="Departemen Minat dan Bakat" />
              <Picker.Item label="Departemen Sosial" value="Departemen Sosial" />
              <Picker.Item label="Departemen Pertahan" value="Departemen Pertahan" />
              <Picker.Item label="Departemen Kesejahteraan Keluarga" value="Departemen Kesejahteraan Keluarga" />
              <Picker.Item label="Departemen Kerumah Tanggaan" value="Departemen Kerumah Tanggaan" />
            </Picker>

          </Form>
          <Button full info onPress={this.InputUsers}>
          <Label> Kirim </Label>

        </Button>

        </Content>
      </Container>
    );
  }
}
