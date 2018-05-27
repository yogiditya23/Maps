import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base';
import CustomHeader from './CustomHeader';
import TabNavigator from './TabNavigator'

class Insert extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "HomeScreen",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 8 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../img/home.png')}
                style={[styles.icon]}
            />

    })

    render() {
        return (

            <Container>

                <CustomHeader
                    title="HomeScreen"
                    drawerOpen ={() => this.props.navigation.navigate("DrawerOpen")}

                />
                  <TabNavigator />

            </Container>
        )
    }

}

export default Insert

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
});
