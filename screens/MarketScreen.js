import React, { Component } from 'react';
import {View, Text, FlatList, Image} from 'react-native'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

class MarketList extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }
    componentDidMount() {
        return fetch('http://15.165.91.254:3000/sample-market')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    console.log("callback Get Market");
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: 80, height: 80, flex: 1, margin: 10,}}/>
                            <View style={{flex: 2, margin: 10}}>
                                <Text
                                    style={{fontSize: 20}}
                                    onPress={() => this.props.navigation.navigate('MarketDetail')}
                                >{item.name} </Text>
                                <Text style={{fontSize: 10}}>{item.description}</Text>
                            </View>
                        </View>}
                />
            </View>
        );
    }
}

class MarketDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }
    componentDidMount() {
        return fetch('http://15.165.91.254:3000/sample-market')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    console.log("callback Get Market");
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: 80, height: 80, flex: 1, margin: 10,}}/>
                            <View style={{flex: 2, margin: 10}}>
                                <Text style={{fontSize: 20}}>{item.name} </Text>
                                <Text style={{fontSize: 10}}>{item.description}</Text>
                            </View>
                        </View>}
                />
            </View>
        );
    }
}

const MarketRouteStack = createStackNavigator(
    {
        MarketList: MarketList,
        MarketDetail: MarketDetail,
    },
    {
        initialRouteName: 'MarketList',
        headerMode: "none",
    }
);

const AppContainer = createAppContainer(MarketRouteStack);

export default class Market extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}