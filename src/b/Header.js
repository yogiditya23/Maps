import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base';
import CustomHeader from './CustomHeader';

class Header extends Component {
    render() {
        return (
                <CustomHeader
                    title="HomeScreen"
                    drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
                />
        );
    }
}

export default Header

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})
