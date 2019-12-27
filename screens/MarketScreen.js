import React, { Component } from 'react';
import {View, Text, FlatList, Image, ScrollView ,TouchableOpacity} from 'react-native'
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import SellerDetailScreen from './SellerDetailScreen';
import MarketDetailScreen from "./MarketDetailScreen";

class MarketList extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }
    componentDidMount() {
        return fetch('http://15.165.91.254:3000/market')
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
                <View>
                    <Text style={{fontSize: 30, margin: 10, marginTop: 50, marginBottom: 20, fontWeight: '700'}}>Market</Text>
                </View>
                <SearchBar lightTheme="true" showCancel="true" round="true"/>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
                            onPress={() => this.props.navigation.navigate('MarketDetail')}
                        >
                            <Image source={item.image} style={{width: 80, height: 80, flex: 1, margin: 10,}}/>
                            <View style={{flex: 2, margin: 10}}>
                                <Text style={{fontSize: 20}}>{item.name} </Text>
                                <Text style={{fontSize: 10}}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>}
                />
            </View>
        );
    }
}

const MarketRouteStack = createStackNavigator(
    {
        MarketList: MarketList,
        MarketDetail: MarketDetailScreen,
        SellerDetail: SellerDetailScreen,
    },
    {
        initialRouteName: 'MarketList',
        defaultNavigationOptions: {
            title: 'Market',
            headerMode: "float",
            header: null,
        }
    }
);

const MarketContainer = createAppContainer(MarketRouteStack);

export default class Market extends Component {

    render() {
        return (
            <MarketContainer/>
        );
    }
}