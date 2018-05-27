import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Text>Login</Text>
        <Button
          title="Open App"
          onPress={() => this.props.navigation.navigate('Home')}
          color="#795548"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
