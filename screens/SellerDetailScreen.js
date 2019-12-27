import React, { Component } from 'react';
import {View, Text, Button} from 'react-native'
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

class SellerDetailScreen extends Component {
    render() {
        return (
            <View>
                <Text>Seller Detail</Text>
            </View>
        );
    }
}

const SellerDetailRouteStack = createStackNavigator(
    {
        SellerDetail: SellerDetailScreen,
    },
    {
        initialRouteName: 'SellerDetail',
        defaultNavigationOptions: {
            title: 'SellerDetail',
            headerMode: "none",
            header: null,
        }
    }
);


const SellerDetailContainer = createAppContainer(SellerDetailRouteStack);

export default class SellerDetail extends Component {
    render() {
        return (
            <SellerDetailContainer/>
        );
    }
}
